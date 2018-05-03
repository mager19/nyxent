var gulp = require('gulp');

//Añadimos browsersync
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('mensaje', function(){
	console.log("todo bien");
});

// Tarea para el browsersync

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
   
    });

     gulp.watch("*.html").on("change", reload);
     gulp.watch("./css/*").on("change", reload);

});



gulp.task('default', ['mensaje','serve']);