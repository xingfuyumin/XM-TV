import { useEffect, useRef } from "react";
import './index.less';

const Index: React.FC = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const Hls = (window as any).Hls;
    const video = videoRef.current as any;
    if (Hls.isSupported() && video) {
      const hls = new Hls();
      hls.loadSource('https://live-play.cctvnews.cctv.com/cctv/merge_cctv13.m3u8?auth_key=1635962688');
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
