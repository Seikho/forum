require.config({
    baseUrl: 'scripts/libs',
    shim: {
        "jquery": {
            exports: "jQuery"
        },
        "bootstrap": {
            deps: ["jquery"]
        }
    },
    map: {
        "css": "css",
        "text": "text"
    }
});
require(["../init"]);
