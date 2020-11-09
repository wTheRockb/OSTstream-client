import * as React from "react";
import { connect, useDispatch } from "react-redux";
import "./style.scss";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Track } from 'src/types/Track';
import { OstStreamState } from 'src/types/Index';
import { CurrentlyPlayingDispatch } from '../CurrentlyPlaying/ducks/types';
import CurrentlyPlayingActions from '../CurrentlyPlaying/ducks/actions';
import { CurrentlyPlayingDisplay } from '../CurrentlyPlayingDisplay';


interface SongPlayerProps {
    readonly currentlyPlayedSong?: Track;
}

const SongPlayer: React.FunctionComponent<SongPlayerProps> = (props) => {

    const dispatch = useDispatch<CurrentlyPlayingDispatch>();
    const beginPlayingNextSong = () => {
        dispatch(CurrentlyPlayingActions.playNextSong())
    };

    return (
        <div className="player__root">
            <div className="player__song-display">
                <CurrentlyPlayingDisplay
                    trackTitle={props.currentlyPlayedSong?.title || ''}
                    albumArtPath={props.currentlyPlayedSong?.album_art_path || ''}
                    albumTitle={props.currentlyPlayedSong?.album_title || ''}
                />
            </div>
            <div className="player__audio">
                <AudioPlayer
                    autoPlay
                    src={props.currentlyPlayedSong?.file_path}
                    onPlay={() => console.log("onPlay")}
                    onClickNext={beginPlayingNextSong}
                    onEnded={beginPlayingNextSong}
                    showSkipControls={true}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state: OstStreamState): SongPlayerProps => ({
    currentlyPlayedSong: state.currentlyPlayingState.currentlyPlaying,
})

export default connect(mapStateToProps)(SongPlayer);
