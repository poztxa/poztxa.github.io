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

    // Create the new structure for the query message
    var queryMessage = document.createElement("div");
    queryMessage.className = "queryMessage";

    var queryInfo = document.createElement("span");
    queryInfo.className = "query-info query-success";
    queryInfo.appendChild(document.createTextNode("\"" + query + "\""));

    queryMessage.appendChild(queryInfo);
    frag.appendChild(queryMessage);

    results.forEach(function(result) {
        var div = document.createElement("div");
        div.className = "search-result";

        var title = document.createElement("h2");
        var link = document.createElement("a");
        link.href = result.link;
        link.appendChild(document.createTextNode(result.title));
        title.appendChild(link);

        div.appendChild(title);
        frag.appendChild(div);
    });

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
