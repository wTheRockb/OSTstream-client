import { GenericOstStreamAction } from 'src/types/Index';
import { Track } from 'src/types/Track';

export const ADD_SONGS_TO_QUEUE = 'app/currentlyPlaying/addSongsToQueue';
export const SET_PLAYING_AND_QUEUE = 'app/currentlyPlaying/setPlayingAndQueue';
export const PLAY_NEXT_SONG = 'app/currentlyPlaying/playNextSong';


interface AddSongsToQueuePayload {
    readonly songs: Track[];
}

interface SetPlayingAndQueuePayload {
    readonly songs: Track[];
}

const addSongsToQueue = (
    payload: AddSongsToQueuePayload,
): GenericOstStreamAction<typeof ADD_SONGS_TO_QUEUE, AddSongsToQueuePayload> => ({
    type: ADD_SONGS_TO_QUEUE,
    payload,
})

const setPlayingAndQueue = (
    payload: SetPlayingAndQueuePayload,
): GenericOstStreamAction<typeof SET_PLAYING_AND_QUEUE, SetPlayingAndQueuePayload> => ({
    type: SET_PLAYING_AND_QUEUE,
    payload,
})

const playNextSong = (): GenericOstStreamAction<typeof PLAY_NEXT_SONG, {}> => ({
    type: PLAY_NEXT_SONG,
    payload: {}
})

export type CurrentlyPlayingAction =
    | ReturnType<typeof playNextSong>
    | ReturnType<typeof setPlayingAndQueue>
    | ReturnType<typeof addSongsToQueue>;

export default {
    ADD_SONGS_TO_QUEUE,
    addSongsToQueue,
    SET_PLAYING_AND_QUEUE,
    setPlayingAndQueue,
    PLAY_NEXT_SONG,
    playNextSong,
}