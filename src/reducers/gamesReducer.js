

const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searched: []
}

const gamesReducer = (state = initState, action) => {

    switch(action.type) {
        case "FETCH_GAMES":
            return {    ...state, 
                        popularGames:  action.payload.popular,
                        upcomingGames: action.payload.upcoming,
                        newGames: action.payload.newGames,
            }
        default:
            return { ...state }
    }
}


//ACTION
/*
{
    type: 'FETCH_GAMES';
}

dispatch({type: "FETCH_GAMES"})
*/

//ACTION CREATOR
const fetchGames = (userData) => {

    return {
        type: "FETCH_GAMES",

    };
}


export default gamesReducer;