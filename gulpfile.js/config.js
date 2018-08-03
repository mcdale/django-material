module.exports = {
  icons: {
    src: [
      'app/assets/images/logo_nesc.svg'
    ],
    dest: 'app/static/img',
    header: {
      src: 'app/assets/images/mono_nesc.png',
      format: 'png',
      width: 207,
    }
  },
  images: {
    src: [
      'app/assets/images/**/*.png',
      'home/assets/images/**/*.png',
      'search/assets/images/**/*.png',
      'project/assets/images/**/*.png',

    ],
    dest: 'app/static/img',
  },
  javascripts: {
    src: [
      'material/assets/javascripts/**/*.js',
      'project/assets/javascripts/**/*.js',
    ],
    dest: 'app/static/js',
    entries: [
      {
        src: 'material/assets/javascripts/index.js',
        dest: 'app.js'
      },
      {
        src: 'project/assets/javascripts/project/index.js',
        dest: 'project.js'
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
      'material/assets/stylesheets/**/*.{sass,scss}',
      'project/assets/stylesheets/**/*.{sass,scss}',
    ],
    dest: 'app/static/css',
    autoprefixer: {
      browsers: ['last 2 versions', 'ie 9-11', 'iOS 8'],
      cascade: false,
    },
    options: {
      includePaths: [
        'node_modules/',
      ],
      outputStyle: 'expanded',
    },
  },
  templates: {
    src: [
      'material/templates/**/*.html',
      'home/templates/**/*.html',
      'search/templates/**/*.html',
      'project/templates/**/*.html',
    ],
    dest: 'app/templates',
  },
  browserSync: {
    options: {
      proxy: 'http://127.0.0.1:8000',
      reloadDebounce: 1500,
      reloadDelay: 500,
    },
  },
}
