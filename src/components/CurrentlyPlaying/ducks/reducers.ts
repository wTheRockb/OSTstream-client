import { OstStreamAction } from 'src/types/Index';
import { Track } from 'src/types/Track';
import { ADD_SONGS_TO_QUEUE, PLAY_NEXT_SONG, SET_PLAYING_AND_QUEUE } from './actions';

export interface CurrentlyPlayingReducerState {
    readonly currentlyPlaying?: Track;
    readonly queue: Track[];
}

export const currentlyPlayingInitialState: CurrentlyPlayingReducerState = {
    queue: [],
}

export const CurrentlyPlayingReducer = (
    state: CurrentlyPlayingReducerState = currentlyPlayingInitialState,
    action: OstStreamAction,
): CurrentlyPlayingReducerState => {
    switch (action.type) {
        case ADD_SONGS_TO_QUEUE:
            return {
                ...state,
                queue: state.queue.concat(action.payload.songs),
            }
        case SET_PLAYING_AND_QUEUE:
            return {
                ...state,
                queue: action.payload.songs.slice(1),
                currentlyPlaying: action.payload.songs[0],
            }
        case PLAY_NEXT_SONG:
            return {
                ...state,
                currentlyPlaying: state.queue.pop(),
            }

        default:
            return state;
    }
}
