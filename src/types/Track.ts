export interface Track {
    readonly id: number;
    readonly title: string;
    readonly artist: string;
    readonly albumId: number;
    readonly uri: string;
    readonly length: number;
    readonly file_path: string;
    readonly album_art_path: string; // TODO
    readonly album_title: string; // TODO
}
