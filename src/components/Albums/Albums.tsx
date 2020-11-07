import RenderDisplayAlbum from "../DisplayAlbum/RenderDisplayAlbum";
import React, { useState, useEffect } from "react";
import "./style.scss";
import { Album } from 'src/types/Album';
import BackendApiClient from 'src/api/api';

export const RenderAlbums: React.FunctionComponent<{}> = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  useEffect(() => {
    // TODO change to backendapiclient call
    const fetchData = async () => {
      const result = await BackendApiClient.getAlbums();
      setAlbums(result);
    };
    fetchData();
  }, []);


  return (
    <div className="albums__root">
      <div className="albums__album-container">
        {albums.map(album => (
          <RenderDisplayAlbum key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
};
