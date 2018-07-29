module.exports = {
  javascripts: {
    src: [
      'app/assets/javascripts/**/*.js',
    ],
    dest: 'app/static/js',
    entries: [
      {
        src: 'app/assets/javascripts/app.js',
        dest: 'app.js'
      },
    ],
    transform: {
      global: true,
      ignore: /\/node_modules\/(?!@material\/)/,
      presets: ['env'],
    },
  },
  stylesheets: {
    src: [
      'app/assets/stylesheets/**/*.{sass,scss}',
    ],
    dest: 'app/static/css',
    autoprefixer: {
      browsers: ['last 2 versions', 'ie9-11', 'iOS 8'],
      cascade: false,
    },
    options: {
      includePaths: [
        'node_modules/',
      ],
      outputStyle: 'expanded',
    },
  },
  browserSync: {
    options: {
      proxy: 'http://127.0.0.1:8000',
      reloadDebounce: 1500,
      reloadDelay: 500,
    },
  },
}
