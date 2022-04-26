import { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles/global.scss';
import { Provider } from 'react-redux';
import store from './redux-toolkits/app/store';

import App from './App';

const rootElement = document.getElementById('root');
render(
	// Importation du store avec Provider, le store est importé depuis ./app/store
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement,
);
