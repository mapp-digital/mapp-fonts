module.exports = {
  inputDir: './src/icons', // (required)
  outputDir: './.fantasticon', // (required)
  assetTypes: ['css', 'scss', 'html', 'ts'],
  name: 'mapp-fonts',
  prefix: 'mui-icons',
  selector: '.mui-icons',
  // Use a custom Handlebars template
  templates: {
    css: './src/templates/css.hbs',
    scss: './src/templates/scss.hbs',
    html: './src/templates/html.hbs'
  }
};
