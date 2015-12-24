var http = require('http');
var fs = require('fs');

http.createServer( function (req, res ) {
    fs.readFile( 'index.html', function( err, data ) {
	res.writeHead( 200, { 'Content-type':'text/html' } );
	res.end( data );
    } );
} ).listen( 1337 ) ;

console.log( 'Listening on 1337' );
