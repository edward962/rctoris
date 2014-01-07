module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        report: 'min'
      },
      build: {
        src: '../src/js/all.js',
        dest: '../build/js/all.js'
      }
    },
    htmlmin: { 
      dist: {
        options: {
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        files: {
          '../build/index.html': '../src/index.html'
        }
      }
    },
    cssmin: {
      my_target: {
        src: '../src/css/style.css',
        dest: '../build/css/style.css'
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['../src/publications/*'],
            dest: '../build/publications/'
          },
          {
              expand: true,
              flatten: true,
              src: ['../src/images/prettyPhoto/dark_rounded/*.gif'],
              dest: '../build/images/prettyPhoto/dark_rounded/'
          },
          {
              expand: true,
              flatten: true,
              src: ['../src/images/prettyPhoto/dark_square/*.gif'],
              dest: '../build/images/prettyPhoto/dark_square/'
          },
          {
              expand: true,
              flatten: true,
              src: ['../src/images/prettyPhoto/dark_style/*.gif'],
              dest: '../build/images/prettyPhoto/dark_style/'
          },
          {
              expand: true,
              flatten: true,
              src: ['../src/images/prettyPhoto/facebook/*.gif'],
              dest: '../build/images/prettyPhoto/facebook/'
          },
          {
              expand: true,
              flatten: true,
              src: ['../src/images/prettyPhoto/light_rounded/*.gif'],
              dest: '../build/images/prettyPhoto/light_rounded/'
          },
          {
              expand: true,
              flatten: true,
              src: ['../src/images/prettyPhoto/light_square/*.gif'],
              dest: '../build/images/prettyPhoto/light_square/'
          },
          {
              expand: true,
              flatten: true,
              src: ['../src/images/*.gif'],
              dest: '../build/images/'
          }
        ]
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7
      },
        files: {
          '../build/images/photos/photo1.jpg': '../src/images/photos/photo1.jpg',
          '../build/images/photos/photo2.jpg': '../src/images/photos/photo2.jpg',
          '../build/images/photos/photo3.jpg': '../src/images/photos/photo3.jpg',
          '../build/images/photos/photo4.jpg': '../src/images/photos/photo4.jpg',
          '../build/images/photos/photo5.jpg': '../src/images/photos/photo5.jpg',
          '../build/images/photos/photo6.jpg': '../src/images/photos/photo6.jpg',
          '../build/images/photos/photo7.jpg': '../src/images/photos/photo7.jpg',
          '../build/images/photos/photo8.jpg': '../src/images/photos/photo8.jpg',
          '../build/images/photos/photo9.jpg': '../src/images/photos/photo9.jpg',
          '../build/images/photos/photo10.jpg': '../src/images/photos/photo10.jpg',
          '../build/images/photos/photo11.jpg': '../src/images/photos/photo11.jpg',
          '../build/images/photos/photo12.jpg': '../src/images/photos/photo12.jpg',
          '../build/images/prettyPhoto/dark_rounded/btnNext.png': '../src/images/prettyPhoto/dark_rounded/btnNext.png',
          '../build/images/prettyPhoto/dark_rounded/btnPrevious.png': '../src/images/prettyPhoto/dark_rounded/btnPrevious.png',
          '../build/images/prettyPhoto/dark_rounded/contentPattern.png': '../src/images/prettyPhoto/dark_rounded/contentPattern.png',
          '../build/images/prettyPhoto/dark_rounded/sprite.png': '../src/images/prettyPhoto/dark_rounded/sprite.png',
          '../build/images/prettyPhoto/dark_square/btnNext.png': '../src/images/prettyPhoto/dark_square/btnNext.png',
          '../build/images/prettyPhoto/dark_square/btnPrevious.png': '../src/images/prettyPhoto/dark_square/btnPrevious.png',
          '../build/images/prettyPhoto/dark_square/contentPattern.png': '../src/images/prettyPhoto/dark_square/contentPattern.png',
          '../build/images/prettyPhoto/dark_square/sprite.png': '../src/images/prettyPhoto/dark_square/sprite.png',
          '../build/images/prettyPhoto/dark_style/btnNext.png': '../src/images/prettyPhoto/dark_style/btnNext.png',
          '../build/images/prettyPhoto/dark_style/btnPrevious.png': '../src/images/prettyPhoto/dark_style/btnPrevious.png',
          '../build/images/prettyPhoto/dark_style/contentPattern.png': '../src/images/prettyPhoto/dark_style/contentPattern.png',
          '../build/images/prettyPhoto/dark_rounded/sprite.png': '../src/images/prettyPhoto/dark_rounded/sprite.png',
          '../build/images/prettyPhoto/facebook/btnNext.png': '../src/images/prettyPhoto/facebook/btnNext.png',
          '../build/images/prettyPhoto/facebook/btnPrevious.png': '../src/images/prettyPhoto/facebook/btnPrevious.png',
          '../build/images/prettyPhoto/facebook/contentPatternBottom.png': '../src/images/prettyPhoto/facebook/contentPatternBottom.png',
          '../build/images/prettyPhoto/facebook/contentPatternLeft.png': '../src/images/prettyPhoto/facebook/contentPatternLeft.png',
          '../build/images/prettyPhoto/facebook/contentPatternRight.png': '../src/images/prettyPhoto/facebook/contentPatternRight.png',
          '../build/images/prettyPhoto/facebook/contentPatternTop.png': '../src/images/prettyPhoto/facebook/contentPatternTop.png',
          '../build/images/prettyPhoto/light_rounded/btnNext.png': '../src/images/prettyPhoto/light_rounded/btnNext.png',
          '../build/images/prettyPhoto/light_rounded/btnPrevious.png': '../src/images/prettyPhoto/light_rounded/btnPrevious.png',
          '../build/images/prettyPhoto/light_rounded/sprite.png': '../src/images/prettyPhoto/light_rounded/sprite.png',
          '../build/images/prettyPhoto/light_square/btnNext.png': '../src/images/prettyPhoto/light_square/btnNext.png',
          '../build/images/prettyPhoto/light_square/btnPrevious.png': '../src/images/prettyPhoto/light_square/btnPrevious.png',
          '../build/images/prettyPhoto/light_square/sprite.png': '../src/images/prettyPhoto/light_square/sprite.png',
          '../build/images/bg_content.png': '../src/images/bg_content.png',
          '../build/images/big_img1.jpg': '../src/images/big_img1.jpg',
          '../build/images/big_img10.jpg': '../src/images/big_img10.jpg',
          '../build/images/big_img2.jpg': '../src/images/big_img2.jpg',
          '../build/images/big_img3.jpg': '../src/images/big_img3.jpg',
          '../build/images/big_img4.jpg': '../src/images/big_img4.jpg',
          '../build/images/big_img5.jpg': '../src/images/big_img5.jpg',
          '../build/images/big_img6.jpg': '../src/images/big_img6.jpg',
          '../build/images/big_img7.jpg': '../src/images/big_img7.jpg',
          '../build/images/big_img8.jpg': '../src/images/big_img8.jpg',
          '../build/images/big_img9.jpg': '../src/images/big_img9.jpg',
          '../build/images/dlife.jpg': '../src/images/dlife.jpg',
          '../build/images/github.png': '../src/images/github.png',
          '../build/images/page1_img1.jpg': '../src/images/page1_img1.jpg',
          '../build/images/page1_img2.jpg': '../src/images/page1_img2.jpg',
          '../build/images/page3_img1.jpg': '../src/images/page3_img1.jpg',
          '../build/images/page3_img10.jpg': '../src/images/page3_img10.jpg',
          '../build/images/page3_img2.jpg': '../src/images/page3_img2.jpg',
          '../build/images/page3_img3.jpg': '../src/images/page3_img3.jpg',
          '../build/images/page3_img4.jpg': '../src/images/page3_img4.jpg',
          '../build/images/page3_img5.jpg': '../src/images/page3_img5.jpg',
          '../build/images/page3_img6.jpg': '../src/images/page3_img6.jpg',
          '../build/images/page3_img7.jpg': '../src/images/page3_img7.jpg',
          '../build/images/page3_img8.jpg': '../src/images/page3_img8.jpg',
          '../build/images/page3_img9.jpg': '../src/images/page3_img9.jpg',
          '../build/images/ros.png': '../src/images/ros.png'
        }
      }
    },
    clean: {
      options: {
        force: true
      },
      build: ['../build']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('build', ['clean', 'uglify', 'htmlmin', 'cssmin', 'copy', 'imagemin']);
};

