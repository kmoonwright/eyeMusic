export const fetchAllPlaylists = () => (
    $.ajax({
        url: '/api/playlists',
        method: 'GET'
    })
);
export const fetchOnePlaylist = (playlistId) => (
    $.ajax({
        url: `/api/playlists/${playlistId}`,
        method: 'GET'
    })
);
export const createPlaylist = (playlist) => (
    $.ajax({
        url: '/api/playlists/',
        method: 'POST',
        data: { playlist }
    })
);
export const deletePlaylist = (id) => (
    $.ajax({
        url: `/api/playlists/${id}`,
        method: 'DELETE'
    })
);
export const addSongToPlaylist = (data) => (
    $.ajax({
        url: '/api/playlist_songs',
        method: 'POST',
        data: { playlist_song: data }
    })
)
export const removeSongFromPlaylist = (id, data) => (
    $.ajax({
        url: `/api/playlists/${id}/remove_song_from_playlist`,
        method: 'DELETE',
        data
    })
)