require.config({
	"packages": [
		{
			"name": "delite",
			"location": "delite-build"
		},
		{
			"name": "decor",
			"location": "decor-build"
		},
		{
			"name": "dpointer",
			"location": "dpointer-build"
		}
	]
});
define(["delite/layer","decor/boot","dpointer/boot"], function(){});