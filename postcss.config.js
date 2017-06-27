module.exports = {
  plugins: {
  	'postcss-simple-vars': {},
  	'postcss-nested': {},
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};