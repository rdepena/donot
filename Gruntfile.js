module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat : {
			options : {
				separator : ";"
			},
			dist : {
				src : ['public/js/src/*.js'],
				dest: 'public/js/dist/dontdo.js'
			}
		},
		watch: {
			files: ['gruntfile.js','public/js/src/*.js', 'server.js', 'src/*.js'],
			tasks: ['jshint', 'concat', 'uglify']
		},
		jshint: {
			// define the files to lint
			files: ['gruntfile.js','public/js/src/*.js', 'server.js', 'src/*.js'],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				// more options here if you want to override JSHint defaults
				globals: {
					module: true
				}
			}
		},
		uglify: {
			options: {
				mangle: {
					except: []
				}
			},
			my_target: {
				files: {
					'public/js/dist/dontdo.min.js': ['public/js/dist/dontdo.js']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};