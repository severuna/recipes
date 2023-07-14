import { create } from 'zustand';
import axios from 'axios';

export const recipesStore = create((set) => ({
    recipes: [],
    loading: false,
    error: null,
    fetchRecipes: async () => {
        try {
            set({loading: true});
            const response = await axios.get('https://api.punkapi.com/v2/beers?page=1');
            set({loading: false, recipes: response.data})
        } catch(err) {
            set({error: err.message, loading: false})
        }
    }
}));
