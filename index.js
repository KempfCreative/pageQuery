const pageQuery = {
    init: () => {
        pageQuery.queryString();
    },

    queryString: () => {
        const fullQuery = window.location.search.length > 0 ? window.location.search.substring(1) : null;
        if (fullQuery !== null) { pageQuery.searchStrings(fullQuery); }
    },

    searchStrings: (fullQuery) => {
        return pageQuery.searchStrings = [].slice.call(fullQuery.split('&'));
    },

    getValue: (wantedValue) => {
        pageQuery.searchStrings.forEach((keyValuePair) => {
            const keyValue = keyValuePair.split('=');
            if (keyValue[0] === wantedValue) {
                return keyValue[1];
            }
        });
    },

    getParameters: () => {
        const allParams = [];
        pageQuery.searchStrings.forEach((keyValuePair) => {
            console.log(keyValuePair);
            allParams.push(keyValuePair.split('=')[0]);
        });
        return allParams;
    }
};

export default pageQuery;
