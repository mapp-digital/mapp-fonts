module.exports = {
  inputDir: './src/icons', // (required)
  outputDir: './.fantasticon', // (required)
  assetTypes: ['css', 'html', 'ts'],
  name: 'mapp-fonts',
  prefix: 'mui-icons',
  selector: '.mui-icons',
  // Use a custom Handlebars template
  templates: {
    css: './src/templates/css.hbs',
    html: './src/templates/html.hbs'
  }
};
