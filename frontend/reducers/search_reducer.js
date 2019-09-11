import { 
    RECEIVE_ALL_SEARCHES, 
    CLEAR_SEARCH } 
from '../actions/search_actions';


export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_SEARCHES:
            return Object.assign({},
                { "artist_ids": action.search_ids.artist_ids },
                { "album_ids": action.search_ids.album_ids },
                { "playlist_ids": action.search_ids.playlist_ids }
            );
        case CLEAR_SEARCH:
            return {};
        default:
            return oldState;
    }
}