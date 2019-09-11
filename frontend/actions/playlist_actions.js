import * as PlaylistUtil from '../util/playlist_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';


export const fetchAllPlaylists = () => (dispatch) => (
    PlaylistUtil.fetchAllPlaylists()
        .then(playlists => dispatch({
            type: RECEIVE_ALL_PLAYLISTS,
            playlists
        })
    )
);

export const fetchOnePlaylist = (playlistId) => (dispatch) => {
    return (
        PlaylistUtil.fetchOnePlaylist(playlistId)
            .then(payload => dispatch({
                type: RECEIVE_ONE_PLAYLIST,
                payload
            })
        )
    )
};

export const createPlaylist = (playlist) => (dispatch) => (
    PlaylistUtil.createPlaylist(playlist)
        .then(payload => dispatch({
            type: RECEIVE_ONE_PLAYLIST,
            payload
        })
    )
);

export const deletePlaylist = (id) => (dispatch) => {
    return (
        PlaylistUtil.deletePlaylist(id)
            .then(playlists => dispatch({
                type: RECEIVE_ALL_PLAYLISTS,
                playlists
            }))
    )
};

export const addSongToPlaylist = (data) => (dispatch) => (
    PlaylistUtil.addSongToPlaylist(data)
        .then(null,
        errors => dispatch({
            type: RECEIVE_PLAYLIST_ERRORS,
            errors
        })
    )
);

export const removeSongFromPlaylist = (id, data) => (dispatch) => (
    PlaylistUtil.removeSongFromPlaylist(id, data)
        .then((payload) => dispatch({
            type: RECEIVE_ONE_PLAYLIST,
            payload
        }),
        errors => dispatch({
            type: RECEIVE_PLAYLIST_ERRORS,
            errors
        })
    )
);
