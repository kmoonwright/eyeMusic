// SONGS

export const fetchAllSongs = () => (
    $.ajax({
        url: 'api/songs',
        method: 'GET'
    })
);
export const fetchOneSong = (songId) => (
    $.ajax({
        url: `api/songs/${songId}`,
        method: 'GET'
    })
);
export const searchSongs = (searchTerm) => (
    $.ajax({
        url: 'api/songs/search',
        method: 'GET',
        data: { search_term: searchTerm }
    })
);

// ALBUMS

export const fetchAllAlbums = () => (
    $.ajax({
        url: 'api/albums',
        method: 'GET'
    })
);
export const fetchOneAlbum = (albumId) => (
    $.ajax({
        url: `api/albums/${albumId}`,
        method: 'GET'
    })
);
export const searchAlbums = (searchTerm) => (
    $.ajax({
        url: 'api/albums/search',
        method: 'GET',
        data: { search_term: searchTerm }
    })
);

// ARTISTS

export const fetchAllArtists = () => (
    $.ajax({
        url: 'api/artists',
        method: 'GET'
    })
);
export const fetchOneArtist = (artistId) => (
    $.ajax({
        url: `api/artists/${artistId}`,
        method: 'GET'
    })
);
export const searchArtists = (searchTerm) => (
    $.ajax({
        url: 'api/artists/search',
        method: 'GET',
        data: { search_term: searchTerm }
    })
);

// PLAYLISTS

export const fetchAllPlaylists = () => (
    $.ajax({
        url: 'api/playlists',
        method: 'GET'
    })
);
export const fetchOnePlaylist = (playlistId) => (
    $.ajax({
        url: `api/playlists/${playlistId}`,
        method: 'GET'
    })
);
export const createPlaylist = (playlist) => (
    $.ajax({
        url: 'api/playlists/',
        method: 'POST',
        data: { playlist }
    })
);
export const deletePlaylist = (id) => (
    $.ajax({
        url: `api/playlists/${id}`,
        method: 'DELETE'
    })
);
export const addSongToPlaylist = (data) => (
    $.ajax({
        url: 'api/playlist_songs/',
        method: 'POST',
        data: { playlist_song: data }
    })
);
export const removeSongFromPlaylist = (id, data) => (
    $.ajax({
        url: 'api/playlists/${id}/remove_song_from_playlist',
        method: 'DELETE',
        data
    })
);
export const searchPlaylists = (searchTerm) => (
    $.ajax({
        url: 'api/playlists/search',
        method: 'GET',
        data: { search_term: searchTerm }
    })
);