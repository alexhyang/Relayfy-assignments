const { watch } = require('gulp');
var browserSync = require('browser-sync').create();

function bs() {
    browserSync.init({
        server: {
            baseDir: "./site"
        }
    });
	watch(["site/index.html", "site/css/main.css", "site/js/main.js"]).on('change', browserSync.reload);
};

exports.default = function() {
	console.log('Running Site ...');
	require('./server.js');
	// All events will be watched
  	watch('./site/', { events: 'all' }, function(cb) {
		cb();
	});
}
exports.bs = bs;