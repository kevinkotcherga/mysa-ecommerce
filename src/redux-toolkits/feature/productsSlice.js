import { createSlice } from '@reduxjs/toolkit';

// createSlice fusionne l'action et le reducer
export const productsSlice = createSlice({
	// 1) UN NOM
	name: 'products',
	// 2) STATE DE BASE
	initialState: {
		// Le state de base est nul, il sera ensuite incrémenté avec la base de données
		products: null,
	},
	// 3) REDUCERS
	reducers: {
		// GET
		setProductsData: (state, action) => {
			// Quand l'action est appelée, le state est récupéré (la data, au début de base nul)
			// action.payload sont les données que l'on récupère en paramètre
			state.products = action.payload;
		},
	},
});

// 4) EXPORT
// Les reducers sont exportés pour être utilisé dans les composants
export const { setProductsData } = productsSlice.actions;
// pisctureSlice
export default productsSlice.reducer;
