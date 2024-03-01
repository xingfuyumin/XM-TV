import { useEffect, useRef } from "react";
import './index.less';

const Index: React.FC = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const Hls = (window as any).Hls;
    const video = videoRef.current as any;
    if (Hls.isSupported() && video) {
      const hls = new Hls();
      hls.loadSource('/api/v1/live/1f635788-d6ee-11ee-8c44-0242ac110002/m3u8');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        console.log('video and hls.js are now bound together !');
      });
    }
  }, []);
  return (
    <video ref={videoRef} controls autoPlay/>
  );
};

export default Index;
