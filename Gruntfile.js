module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    config: 'sass/config.rb',
                    sassDir: 'sass/',
                    cssDir: 'css/'
                }
            }
        },
        watch: {
          scripts: {
            files: [
                'sass/*',
                'sass/**/*'
            ],
            tasks: ['compass'],
            options: {
              debounceDelay: 250
            }
          }
        },
    });

    grunt.registerTask('build', [
        'compass'
    ]);
};
