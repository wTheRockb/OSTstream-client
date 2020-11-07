import { Track } from './Track';

export interface AlbumDetails {
    readonly id: number;
    readonly title: string;
    readonly gameId: number;
    readonly publishDate?: string; // TODO change to date?
    readonly image_path: string;
    readonly tracks: Track[];
}
