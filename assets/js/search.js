function displaySearchResults(results, query) {
    var searchResultsEl = document.getElementById("search-results"),
        searchProcessEl = document.getElementById("search-process");

    if (results.length) {
        var resultsHTML = "";
        var searchVersions = [{% for v in site.version_params.search_versions %}"{{ v }}",{% endfor %}"all"];
        results.forEach(function (result) {
            var item = window.data[result.ref];

            // Versioning is disabled
            if (("{{ site.version_params.versioning }}" == "false") && (item.version != "all")) {
                return;
            }

            // Skip result if showing versions disabled
            if (("{{ site.version_params.allow_search }}" == "false") && (item.version != "all")) {
                return;
            }

            // Skip result if version not in all or versions allowed for search
            if (("{{ site.version_params.versioning }}" == "true") && ("{{ site.version_params.allow_search }}" == "true") && (!searchVersions.includes(item.version))) {
                return;
            }

            if (item.title) {
                var contentPreview = getPreview(query, item.content, 170),
                    titlePreview = getPreview(query, item.title),
                    versionBadge;

                // If we only allow one version (all) skip adding a badge
                if (searchVersions.length == 1 || "{{ site.version_params.versioning }}" == "false") {
                    versionBadge = "";
                } else if (item.version != "all") {
                    versionBadge = "<span class='badge badge-secondary'>" + item.version + "</span>";
                } else {
                    versionBadge = "<span class='badge badge-{{ site.tag_color }}'>Current</span>";
                }

                // Ganti bagian ini dengan struktur artikel yang lebih kaya
                resultsHTML += `
                    <article class="blog-post hentry index-post">
                        <a class="entry-image-wrap is-image" href="{{ site.baseurl }}${item.url.trim()}" title="${item.title}">
                            ${item.image ? `<span class="entry-thumb lazy-ify" data-image="${item.image}" style="background-image:url(${item.image})"></span>` : ''}
                        </a>
                        <div class="entry-header">
                            <span class="entry-category">${item.categories[0]}</span>
                            <h2 class="entry-title">
                                <a class="entry-title-link" href="{{ site.baseurl }}${item.url.trim()}" rel="bookmark" title="${item.title}">${titlePreview}</a>
                            </h2>
                            <p class="entry-excerpt excerpt">${contentPreview}</p>
                            <div class="entry-meta">
                                <span class="entry-author">
                                    <span class="by">by</span>
                                    <span class="author-name">${item.author ? site.authors[item.author].display_name : site.author}</span>
                                </span>
                                <span class="entry-time">
                                    <span class="on">-</span>
                                    <time class="published" datetime="${item.date}">${item.date}</time>
                                </span>
                            </div>
                        </div>
                    </article>
                `;
            }
        });

        searchResultsEl.innerHTML = resultsHTML;
        searchProcessEl.innerText = "";
    } else {
        searchResultsEl.style.display = "none";
        searchProcessEl.innerText = "No results found.";
    }
}
