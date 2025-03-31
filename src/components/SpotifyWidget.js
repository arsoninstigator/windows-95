import React from "react";
import { Rnd } from "react-rnd";
import "../styles.css";

const SpotifyWidget = () => {
  return (
    <Rnd
      default={{
        x: window.innerWidth - 360,
        y: window.innerHeight - 120,
        width: 340,
        height: 80,
      }}
      enableResizing={false}
      bounds="parent"
    >
      <div className="spotify-widget">
        
         <iframe
        src="https://open.spotify.com/embed/playlist/1mOYtHnB6e5szfX6XRDLMl"
        width="340"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
      </div>
    </Rnd>
  );
};

export default SpotifyWidget;
