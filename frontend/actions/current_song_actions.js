export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const FETCH_NEXT_SONG = "FETCH_NEXT_SONG";
export const FETCH_PREV_SONG = "FETCH_PREV_SONG";

export const togglePlay = (boolean) => {
    return {
        type: TOGGLE_PLAY,
        boolean
    }
}

export const fetchNextSong = (songId) => dispatch => {
    return SongApiUtil.fetchSong(songId).then((song) => dispatch({
        type: FETCH_NEXT_SONG,
        song
    }))
}

export const fetchPrevSong = (songId) => dispatch => {
    return SongApiUtil.fetchSong(songId).then((song) => dispatch({
        type: FETCH_PREV_SONG,
        song
    }))
}