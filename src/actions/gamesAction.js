import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from '../api';

// Action Creator

export const loadGames = () => async (dispatch) => {
    // Fetch Axios
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}

export const fetchSearch = (game_name) => async(dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));
    console.log("FETCH SEARCH CALLED");
    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searchGames.data.results
        }
    })
}
