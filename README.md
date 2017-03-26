# pageQuery

## A lightweight wrapper for getting `window.location.search` params and values.

### To Do:
[ ] Unit Test coverage
[ ] Evaluate if the init should be bootstrap via IIFE to allow for zero configuration
[ ] Evaluate if query strings should be stored in local storage for state management

### Breakdown:

#### pageQuery namespace ```pageQuery = {}```
Type: Object

***

##### Object Literals:

### ```init```

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `pageQuery.init` | function | Function that calls queryString() to grab search string |

Returns: `pageQuery.queryString()`

***

### ```queryString```

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `pageQuery.queryString` | function | Function that checks for the presence of values in `window.location.search` |
| `fullQuery` | string or `null` | Const that evaluates to the value of the string after `?` or defaults to `null` |

Returns: `pageQuery.searchStrings(fullQuery)`

***

### ```searchStrings```

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `pageQuery.searchStrings()` | function | Function that turns the search params into an array value |
| `pageQuery.searchStrings` | Array | Array of the key value pairs in the `window.location.search` |

Returns: `pageQuery.searchStrings`

***

### ```getValue```

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `pageQuery.getValue` | Function | Function that returns a single value from a named param |
| `keyValue` | Array | Array of the split key value pairs from the `searchStrings` |

Returns: `keyValue[1]`

***

### ```getParameters```

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `pageQuery.getParameters` | Function | Function that returns the array of params in the search string |
| `allParams` | Array | Array of the params in the search string |

Returns: `allParams`
