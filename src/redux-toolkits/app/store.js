import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../feature/productsSlice';

export default configureStore({
	// Tous les reducers sont stockés ici
	reducer: {
		// picturesReducer est récupé depuis le slice
		products: productsReducer,
	},
});
