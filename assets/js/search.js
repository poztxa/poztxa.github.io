!(function() {

    var parseQueryFromURL = function() {
        
        var searchQuery = window.location.search;
        if (!searchQuery) {
            return null;
        }

        var regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {},
            match;
        while (match = regex.exec(searchQuery)) {
            params[match[1]] = match[2];
        }

        if (!params.hasOwnProperty("q")) {
            return null;
        }

        params.q = params.q.replace(/\+/g, ' ');

        return decodeURIComponent(params.q);

    };
    

    var scanPosts = function(posts, properties, query) {

        var results = [],
        matches = {},
        match,
        terms = query.split(" ");
        var regexes = terms.map(function(term) {
            return new RegExp(term, "ig");
        });

        regexes.push(new RegExp(query, "ig"));

        posts.forEach(function(post, ordinal) {
            var textToScan = "";
            properties.forEach(function(property) {
                if (post.hasOwnProperty(property)) {
                    textToScan += post[property];
                }
            });

            regexes.forEach(function(regex) {
                if (regex.test(textToScan)) {
                    if (matches[post.link]) {
                        matches[post.link].count++;
                    } else {
                        matches[post.link] = {
                            count: 1,
                            ordinal: ordinal,
                        };
                    }
                }
            });
        });

        for (match in matches) {
            if (matches.hasOwnProperty(match)) {
                results.push(matches[match]);
            }
        }

        results.sort(function (l, r) {
            if (l.count > r.count) {
                return -1;
            }
            if (l.count < r.count) {
                return 1;
            }
            if (l.ordinal > r.ordinal) {
                return 1;
            }
            if (l.ordinal < r.ordinal) {
                return -1;
            }
            return 0;
        });

        results = results.map(function(match){
            return posts[match.ordinal];
        });

        return results;

    };

var outputResults = function(query, results, el) {
    var frag = document.createDocumentFragment();

    // Create the query message
    var queryMessage = document.createElement("div");
    queryMessage.className = "queryMessage";

    var queryInfo = document.createElement("span");
    queryInfo.className = "query-info query-success";
    queryInfo.appendChild(document.createTextNode("\"" + query + "\""));

    queryMessage.appendChild(queryInfo);
    frag.appendChild(queryMessage);

    // Create the blog-posts container
    var blogPostsContainer = document.createElement("div");
    blogPostsContainer.className = "blog-posts hfeed index-post-wrap";

    results.forEach(function(result, index) {
        // Create the article element
        var article = document.createElement("article");
        article.className = `blog-post hentry index-post post-${index}`;

        // Add the entry-image-wrap
        var entryImageWrap = document.createElement("a");
        entryImageWrap.className = "entry-image-wrap is-image";
        entryImageWrap.href = result.link;
        entryImageWrap.title = result.title;

        var entryThumb = document.createElement("span");
        entryThumb.className = "entry-thumb lazy-ify";
        entryThumb.dataset.image = result.image || "assets/images/default.jpg"; // Default image fallback
        entryThumb.style.backgroundImage = `url(${result.image || "assets/images/default.jpg"})`;

        entryImageWrap.appendChild(entryThumb);
        article.appendChild(entryImageWrap);

        // Add the entry-header
        var entryHeader = document.createElement("div");
        entryHeader.className = "entry-header";

        var entryCategory = document.createElement("span");
        entryCategory.className = "entry-category";
        entryCategory.textContent = result.category || "Uncategorized";

        var entryTitle = document.createElement("h2");
        entryTitle.className = "entry-title";

        var titleLink = document.createElement("a");
        titleLink.className = "entry-title-link";
        titleLink.href = result.link;
        titleLink.rel = "bookmark";
        titleLink.title = result.title;
        titleLink.textContent = result.title;

        entryTitle.appendChild(titleLink);
        entryHeader.appendChild(entryCategory);
        entryHeader.appendChild(entryTitle);

        // Add the entry-excerpt
        var entryExcerpt = document.createElement("p");
        entryExcerpt.className = "entry-excerpt excerpt";
        entryExcerpt.textContent = result.excerpt || ""; // Optional excerpt

        entryHeader.appendChild(entryExcerpt);

        // Add the entry-meta
        var entryMeta = document.createElement("div");
        entryMeta.className = "entry-meta";

        var entryAuthor = document.createElement("span");
        entryAuthor.className = "entry-author";

        var byText = document.createElement("span");
        byText.className = "by";
        byText.textContent = "by";

        var authorName = document.createElement("span");
        authorName.className = "author-name";
        authorName.textContent = result.author || "Anonymous";

        entryAuthor.appendChild(byText);
        entryAuthor.appendChild(authorName);

        var entryTime = document.createElement("span");
        entryTime.className = "entry-time";

        var onText = document.createElement("span");
        onText.className = "on";
        onText.textContent = "-";

        var time = document.createElement("time");
        time.className = "published";
        time.dateTime = result.date || "";
        time.textContent = result.date || "Unknown Date";

        entryTime.appendChild(onText);
        entryTime.appendChild(time);

        entryMeta.appendChild(entryAuthor);
        entryMeta.appendChild(entryTime);
        entryHeader.appendChild(entryMeta);

        article.appendChild(entryHeader);
        blogPostsContainer.appendChild(article);
    });

    frag.appendChild(blogPostsContainer);
    el.appendChild(frag);
};

    var Search = function(options) {

        options = options || {};
        
        if (!options.selector) {
            throw new Error("We need a selector to find");
        }

        this.el = document.querySelector(options.selector);
        if (!this.el) {
            throw new Error("We need a HTML element to output to");
        }

        this.posts = JEKYLL_POSTS;
        if (!this.posts) {
            return this.el.appendChild(document.createTextNode(this.noResultsMessage));
        }

        var defaultProperties = ["title"];
        this.properties = options.properties || defaultProperties;

        this.query = parseQueryFromURL();
        
        if (!this.query) {
            return this.el.appendChild(document.createTextNode("No search terms specified."));
        }

        this.results = scanPosts(this.posts, this.properties, this.query);
        
        if (!this.results.length) {
            return this.el.appendChild(document.createTextNode("No results found for \"" + this.query + "\""));
        }

        outputResults(this.query, this.results, this.el);

    };

    window.jekyllSearch = Search;
})();
