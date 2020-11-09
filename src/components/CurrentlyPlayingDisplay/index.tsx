import * as React from "react";
import "./styles.scss";

interface CurrentlyPlayingDisplayProps {
    readonly trackTitle: string;
    readonly albumTitle: string;
    readonly albumArtPath: string;
}

export const CurrentlyPlayingDisplay: React.FC<CurrentlyPlayingDisplayProps> = props => {

    return (
        <div className="currently-playing-display__root">
            <img src={props.albumArtPath} className="currently-playing-display__image" />
            <div className="currently-playing-display__song-title">{props.trackTitle}</div>
            <div className="currently-playing-display__album-title">{props.albumTitle}</div>
        </div>
    )
} 
