/**
 * `tasks/config/sass`
 *
 * ---------------------------------------------------------------
 *
 * Compile your SCSS files into a CSS stylesheet.
 *
 * Reference https://github.com/kazeidesign/Sails-Sass
 *
 */
const sass = require('node-sass');

module.exports = function(grunt) {                  // Create new Grunt task
  grunt.config.set('sass', {                        // Task sass
    dev: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      files: [{
        expand: true,                               // 'expand directory'
        cwd: 'assets/styles/',                      // 'source folder'
        src: ['importer.scss', 'importer.sass'],    // 'source files'
        dest: '.tmp/public/styles/',                // 'destination folder'
        ext: '.css'                                 // 'extension of compiled file'
      }]
    }
  });
  grunt.loadNpmTasks('grunt-sass');           // Load task Grunt-sass
};
