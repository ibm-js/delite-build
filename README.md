# delite-build

Build version of [ibm-js/delite](https://github.com/ibm-js/delite).

## Status

No official release yet.

## Installation

_Bower_ release installation:

    $ bower install delite-build

_Manual_ master installation:

    $ git clone git://github.com/ibm-js/delite-build.git

Then install dependencies with bower (or manually from github if you prefer to):

	$ cd delite-build
	$ bower install


## How to use

### `baseUrl` is the directory containing `delite-build`.
This is the most common use-case so the needed configuration is built in the layer.
To load the minified layer you just need to wrap your main `require` call with another `require`, requiring `"delite-build/layer"`.
Then you should continue to refer to modules with `"delite/foo"`.

For example, this code:
```js
require(["app/main", "delite/foo"], function() {
	...
});
```
Becomes:
```js
require(["delite-build/layer"], function() {
	require(["app/main", "delite/foo"], function() {
		...
	});
});
```

### Other `baseUrl`

If `baseUrl` is not the directory containing `delite-build`, custom configuration is needed.

```js
require.config({
	paths: {
		"delite": "path/to/delite-build",
		"decor": "path/to/decor-build",
		"dpointer": "path/to/dpointer-build"
	}
});
```


## Bug reporting

Issues should be filled against the source version of this project at [ibm-js/delite](https://github.com/ibm-js/delite)


## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](./LICENSE).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).
