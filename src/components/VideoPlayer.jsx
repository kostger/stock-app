import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { motion } from "framer-motion";
function VideoPlayer({ url }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: true }}
      className="video-wrapper flex-grow h-[400px] w-full px-5 md:w-1/2"
    >
      <ReactPlayer
        url={url}
        playing={play}
        muted={true}
        controls
        width="100%"
        height="100%"
      />
    </motion.div>
  );
}

export default VideoPlayer;
