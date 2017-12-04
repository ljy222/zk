var gulp=require("gulp");
var mincss=require("gulp-minify-css");
var minjs=require("gulp-uglify");
var minhtml=require("gulp-htmlmin");

gulp.task("zipcss",function(){
    gulp.src("app/content/css/*.css")
    .pipe(mincss())
    .pipe(gulp.dest("newcss"))
})
gulp.task("zipjs",function(){
    gulp.src("app/controller/text.js")
    .pipe(minjs())
    .pipe(gulp.dest("newjs"))
})
var options={
    removeComments:true,
    collapseWhitespace:true,
    collapseBoolenaAttributes:true,
    removeScriptTypeAttributes:true,
    removeStyleLinkTypeAttributes:true,
}
gulp.task("ziphtml",function(){
    gulp.src("./index.html")
    .pipe(minhtml(options))
    .pipe(gulp.dest("newhtml"))
})