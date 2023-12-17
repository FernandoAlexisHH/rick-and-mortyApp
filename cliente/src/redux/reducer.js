
const initialState = {
    myFavorites:[],
    allCharacters:[]

};

const reducer = function(state = initialState, action){
    switch (action.type) {
        case 'ADD_FAV':
            return { 
                ...state, myFavorites: action.payload, 
                allCharacters: action.payload };
        
        case 'REMOVE_FAV':
           return { ...state, myFavorites: action.payload };

        case "FILTER":
            const allCharactersFiltered = action.payload === "AllCharacters" ? state.allCharacters : state.allCharacters.filter((char) => char.gender === action.payload)
            return{
                ...state,
                myFavorites:allCharactersFiltered
            }
        case "ORDER":
            const allCharacters = [...state.allCharacters];
            return{
                ...state,
                myFavorites: action.payload === "Ascendente"
                ? allCharacters.sort((a,b) => a.id - b.id)
                :allCharacters.sort((a,b) => b.id - a.id)
            }
        default:
            return{
                ...state
            }
    }
};

export default reducer;