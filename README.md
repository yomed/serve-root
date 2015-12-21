# serve-root
express middleware to serve files in a directory as root

## Installation

```bash
npm install serve-root --save
```


## Usage

This module is useful for serving files that would normally be referenced from the root 
directory (favicons, sitemaps, etc), but that you would prefer to keep out of root for
for organizational purposes. You can specify paths to these static resources, and
incoming requests for the file name will be served those files.

```js
var serveRoot = require('serve-root');
app.use(serveRoot({
    dir: __dirname + '/../icons',    // directory where the files are
    headers: {etag: false},          // custom headers for express sendFile
    paths: [
        '/favicon-16x16.png',
        '/favicon-32x32.png',
        '/favicon-96x96.png',
        '/favicon-194x194.png',
        '/favicon.ico',
        '/manifest.json'
    ]
}));
```