import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import axios from 'axios';

const SERVER_LINK = 'https://api.punkapi.com/v2/beers?page=';

export const recipesStore = create(devtools((set, get) => ({
    recipes: [],
    loading: false,
    error: null,
    apiPage: 1,
    fetchRecipes: async ( ) => {
        try {
            set({loading: true});
            const response = await axios.get(SERVER_LINK+get().apiPage);
            set({loading: false, recipes: response.data, apiPage: Number(get().apiPage++)})
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
        if(get().recipes.length === 0) {
            set({ apiPage: Number(get().apiPage + 1)})
            get().fetchRecipes()
            return get().recipes
        }
    },
})));
