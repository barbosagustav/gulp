/* Constante para requerir o gulp*/
const gulp = require('gulp');

/* Constante para requerir o plugin de compilação do SASS*/
const sass = require('gulp-sass')(require('sass'));

/* Constante para requerir o plugin de compilação de img*/
const imagemin = require('gulp-imagemin')

/* Constante para requerir o plugin de compilação de JS*/
const uglify = require ('gulp-uglify');


/* TAREFAS */

/* Função de compilação do SASS*/
function compilaSass(){
    return gulp.src('./source/styles/*.scss') /* Onde o gulp irá buscar */
    .pipe(sass({
        outputStyle: 'compressed' /* Minificação do arquivo*/
    }))
    .pipe(gulp.dest('./build/styles')) /* Onde o gulp irá aplicar a compilação */
}

/* Função de compilação do JS*/
function comprimeJavaScrip (){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

/* Função de compilação de img*/
function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}


/* Exportação das funções */
exports.sass = compilaSass; 
exports.images = comprimeImagens;
exports.javascrip = comprimeJavaScrip;