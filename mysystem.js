var os = require('os');
var msg = 'Here is some info about your system.';
var sysArray = [ 'Type: ' + os.type(),
	         'Node Version: ' + process.version,
	         'Platform: ' + os.platform(),
	         'Hostname: ' + os.hostname(),
                 'Total Memory: ' + os.totalmem(),
	         'Free Memory: ' + os.freemem(),
	         'Uptime: ' + os.uptime() ];

console.log( msg );
for( var i=0; i<sysArray.length; i++ ) {
    console.log( sysArray[i] );
}

