import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

function VideoPlayer({ url }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
  }, []);
  return (
    <div className="video-wrapper flex-grow h-[400px] w-full px-5 md:w-1/2">
      <ReactPlayer
        url={url}
        playing={play}
        muted={true}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default VideoPlayer;
