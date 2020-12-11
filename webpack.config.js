const path = require('path');
const postCssPlugins = [require('postcss-import'), require('postcss-simple-vars'), require('postcss-nested'), require('autoprefixer')];
module.exports = {
	entry: './app/assets/scripts/App.js',
	output: {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'app'),
	},
	mode: 'development',
	watch: true,
	module: {
		rules: [
			{
				//esta expresión quiere decir solo archivos con extension css
				test: /\.css$/i,
				//style-loader carga en el browser, css-loader agarra el css
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						//esta es la forma de escribir plugins en webpack 5 puede ser un array dentro o usar una contante
						options: {
							postcssOptions: {
								// plugins: [['postcss-simple-vars', 'postcss-nested', 'autoprefixer']],
								plugins: [postCssPlugins],
							},
						},
					},
				],
			},
		],
	},
};
