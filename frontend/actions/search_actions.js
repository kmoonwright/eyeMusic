import * as SearchApiUtil from '../util/search_util'

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';

export const fetchSearchedSongs = searchTerm => dispatch => {
    SearchApiUtil.searchSongs(searchTerm)
        .then(songs => dispatch({
            type: RECEIVE_ALL_SONGS,
            songs
        })
    )
};
export const fetchSearchedArtists = searchTerm => dispatch => {
    SearchApiUtil.searchArtists(searchTerm)
        .then(artists => dispatch({
            type: RECEIVE_ALL_ARTISTS,
            artists
        })
    )
};
export const fetchSearchedAlbums = searchTerm => dispatch => {
    SearchApiUtil.searchAlbums(searchTerm)
        .then(albums => dispatch({
            type: RECEIVE_ALL_ALBUMS,
            albums
        })
    )
};
export const fetchSearchedPlaylists = searchTerm => dispatch => {
    SearchApiUtil.searchPlaylists(searchTerm)
        .then(playlists => dispatch({
            type: RECEIVE_ALL_PLAYLISTS,
            playlists
        })
    )
};