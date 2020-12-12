import '../styles/styles.css';
//alert('Mas bien lokita Watch activado!');
//desactivamos watch porque ahora hot se encarga de eso
if (module.hot) {
	module.hot.accept();
}
