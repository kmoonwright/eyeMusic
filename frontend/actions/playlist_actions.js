import * as PlaylistUtil from '../util/playlist_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_ONE_PLAYLIST = 'RECEIVE_ONE_PLAYLIST';
export const RECEIVE_ALL_PLAYLIST_SONGS = 'RECEIVE_ALL_PLAYLIST_SONGS';
export const RECEIVE_ONE_PLAYLIST_SONG = 'RECEIVE_ONE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const REMOVE_ONE_PLAYLIST = 'REMOVE_ONE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';


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

// export const fetchAllPlaylistSongs = () => (dispatch) => (
//     PlaylistUtil.fetchAllPlaylistSongs()
//         .then(playlists => dispatch({
//             type: RECEIVE_ALL_PLAYLIST_SONGS,
//             playlists
//         })
//     )
// );
// export const fetchOnePlaylistSong = (playlistId, songId) => (dispatch) => {
//     return (
//         PlaylistUtil.fetchOnePlaylistSong(playlistId, songId)
//             .then(payload => dispatch({
//                 type: RECEIVE_ONE_PLAYLIST_SONG,
//                 payload
//             })
//         )
//     )
// };

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
        .then((playlist) => dispatch({
            type: REMOVE_ONE_PLAYLIST,
            playlist
        }),
        errors => dispatch({
            type: RECEIVE_PLAYLIST_ERRORS,
            errors
        })
    )
);
