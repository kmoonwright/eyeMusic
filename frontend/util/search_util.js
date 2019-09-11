export const searchArtists = (paramString) => {
    return $.ajax({
        method: "GET",
        url: `api/search/${paramString}`
    })
}
// export const searchAlbums = (searchTerm) => (
//     $.ajax({
//         url: '/api/albums/search',
//         method: 'GET',
//         data: { search_term: searchTerm }
//     })
// );
// export const searchArtists = (searchTerm) => (
//     $.ajax({
//         url: '/api/artists/search',
//         method: 'GET',
//         data: { search_term: searchTerm }
//     })
// );
// export const searchSongs = (searchTerm) => (
//     $.ajax({
//         url: '/api/songs/search',
//         method: 'GET',
//         data: { search_term: searchTerm }
//     })
// );
// export const searchPlaylists = (searchTerm) => (
//     $.ajax({
//         url: '/api/playlists/search',
//         method: 'GET',
//         data: { search_term: searchTerm }
//     })
// );
