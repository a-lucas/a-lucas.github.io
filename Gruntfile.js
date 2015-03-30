module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            custom: {
                src: [
                    "app/directives/slide.js",
                    "app/directives/unsafeHtml.js",
                    "app/directives/scroll.js",
                    "app/app.js",
                    "app/services.js",
                    "app/controllers/education.js",
                    "app/controllers/portfolio.js",
                    "app/controllers/professional.js",
                    "app/controllers/services.js",
                    "app/controllers/skills.js",
                    "app/controllers/contact.js",
                    "app/controllers/menu.js",
                    "app/controllers/technologies.js",
                    "app/dist/templates.js"
                ],
                dest: 'app/dist/a-lucas.resume.js'
            },
            css: {
                src: ['app/css/*.css'],
                dest: 'app/css/a-lucas.resume.css'
            }


        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                sourceMap:true
            },
            target: {
                files: {
                    'app/dist/allcss.min.css': ['app/css/a-lucas.resume.css']
                }
            }
        },
        jshint: {
            files: ['app/controllers/*.js', 'app/directives/*.js', 'app/app.js', 'app/services.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    console: true,
                    module: true,
                    devel: false,
                    document: true,
                    undef: true,
                    unused: true,
                    browser: true,
                    sub: true,
                    globals: ["angular"],
                    node: true,
                    angular: true,
                }
            }
        },
        html2js: {
            options: {
                // custom options, see below 
                base: 'app'
            },
            main: {
                src: ['app/views/*.min.html', 'app/views/skills.html'],
                dest: 'app/dist/templates.js'
            },
        },
        csslint: {
            default: {
                options: {
                    import: false,
                    important: false
                },
                src: ['app/css/*.css']
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            app: {
                files: {
                    'app/dist/a-lucas.resume-annotate.js': ['app/dist/a-lucas.resume.js'],
                }
            }
        },
        uglify: {
            app: {
                files: {
                    'app/dist/a-lucas.resume.min.js': ['app/dist/a-lucas.resume-annotate.js']
                }
            }
        },
        exec: {
            permissions: {
                command: 'chmod -R 777 app'
            }
        }, 
        htmlmin: {// Task 
            dist: {// Target 
                options: {// Target options 
                    removeComments: true,
                    collapseWhitespace: true,
                    removeScriptTypeAttributes: false,
                    customAttrCollapse:  /ng\-class/ ,
                    removeStyleLinkTypeAttributes: false
                },
                files: {// Dictionary of files 
                    'app/views/contact.min.html': 'app/views/contact.html', 
                    'app/views/education.min.html' : 'app/views/education.html',
                    'app/views/form.min.html' : 'app/views/form.html',
                    'app/views/hangout.min.html' : 'app/views/hangout.html',
                    'app/views/intro.min.html' : 'app/views/intro.html',
                    'app/views/menu-content-header.min.html' : 'app/views/menu-content-header.html',
                    'app/views/menu-content1.min.html' : 'app/views/menu-content1.html',
                    'app/views/menu-content2.min.html' : 'app/views/menu-content2.html',
                    'app/views/menu.min.html' : 'app/views/menu.html',
                    'app/views/portfolio.min.html' : 'app/views/portfolio.html',
                    'app/views/professional.min.html' : 'app/views/professional.html',
                    'app/views/services.min.html' : 'app/views/services.html',
                    //'app/views/skills.min.html' : 'app/views/skills.html',
                    'app/views/skype.min.html' : 'app/views/skype.html',
                    'app/index.html' : 'app/index.dev.html'
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('js', ['jshint', 'html2js', 'concat', 'ngAnnotate', 'uglify', 'exec']);
    grunt.registerTask('css', ['csslint', 'concat', 'cssmin', 'exec']);
    grunt.registerTask('default', ['htmlmin', 'html2js', 'concat', 'cssmin', 'ngAnnotate', 'uglify', 'exec']);
};