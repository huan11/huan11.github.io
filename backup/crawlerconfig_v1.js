new Crawler({
    appId: '6S354XMVPF',
    apiKey: '',
    maxUrls: 5000,
    indexPrefix: '',
    rateLimit: 8,
    renderJavaScript: false,
    startUrls: ['https://huan11.github.io'],
    discoveryPatterns: ['https://huan11.github.io/**'],
    schedule: 'at 21:12 on Tuesday',
    maxDepth: 10,
    actions: [
        {
            indexName: 'huan11io',
            pathsToMatch: ['https://huan11.github.io/**'],
            recordExtractor: ({ helpers }) => {
                return helpers.docsearch({
                    recordProps: {
                        lvl1: ['header h1', 'article h1', 'main h1', 'h1', 'head > title'],
                        content: ['article p, article li', 'main p, main li', 'p, li'],
                        lvl0: {
                            selectors: '',
                            defaultValue: 'Documentation'
                        },
                        lvl2: ['article h2', 'main h2', 'h2'],
                        lvl3: ['article h3', 'main h3', 'h3'],
                        lvl4: ['article h4', 'main h4', 'h4'],
                        lvl5: ['article h5', 'main h5', 'h5'],
                        lvl6: ['article h6', 'main h6', 'h6']
                    },
                    aggregateContent: true,
                    recordVersion: 'v3'
                });
            }
        }
    ],
    sitemaps: ['https://huan11.github.io/sitemap.xml'],
    initialIndexSettings: {
        huan11io: {
            advancedSyntax: true,
            allowTyposOnNumericTokens: false,
            attributeCriteriaComputedByMinProximity: true,
            attributeForDistinct: 'url',
            attributesForFaceting: ['type', 'lang'],
            attributesToHighlight: ['hierarchy', 'content'],
            attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url', 'url_without_anchor', 'type'],
            attributesToSnippet: ['content:10'],
            camelCaseAttributes: ['hierarchy', 'content'],
            customRanking: ['desc(weight.pageRank)', 'desc(weight.level)', 'asc(weight.position)'],
            distinct: 1,
            highlightPostTag: '</span>',
            highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
            ignorePlurals: true,
            minProximity: 1,
            minWordSizefor1Typo: 3,
            minWordSizefor2Typos: 7,
            ranking: ['words', 'filters', 'typo', 'attribute', 'proximity', 'exact', 'custom'],
            removeWordsIfNoResults: 'allOptional',
            searchableAttributes: [
                'unordered(hierarchy.lvl0)',
                'unordered(hierarchy.lvl1)',
                'unordered(hierarchy.lvl2)',
                'unordered(hierarchy.lvl3)',
                'unordered(hierarchy.lvl4)',
                'unordered(hierarchy.lvl5)',
                'unordered(hierarchy.lvl6)',
                'content'
            ]
        }
    },
    ignoreCanonicalTo: false,
    safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 10 } }
});
