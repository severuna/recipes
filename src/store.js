import { create } from 'zustand';
import axios from 'axios';

export const recipesStore = create((set, get) => ({
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
    }, 
    checkedArr: [],
    setCheckedArr: ( item ) => {
        get().checkedArr.length === 0 
            ?
            set({checkedArr: [item]})
            :
            get().checkedArr.some(elem => elem.id === item.id) ? set({checkedArr: get().checkedArr.filter(elem => Number(elem.id) !== Number(item.id))}) : set({checkedArr: [...get().checkedArr,item]});
    },
    deleteItems: (  ) => {
        get().checkedArr.forEach(item => {
            get().recipes.some(elem => elem.id === item.id) ? set({recipes: get().recipes.filter(elem => Number(elem.id) !== Number(item.id))}) : set({recipes: [...get().recipes,item]});
        })
        set({checkedArr: []})
    }
}));
