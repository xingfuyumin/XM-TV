import { useEffect, useRef } from "react";

const Index: React.FC = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const Hls = (window as any).Hls;
    const video = videoRef.current as any;
    if (Hls.isSupported() && video) {
      const hls = new Hls();
      hls.loadSource('/channels/lantian/channel001/1080p.m3u8');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        console.log('video and hls.js are now bound together !');
      });
    }
  }, []);
  return (
    <video ref={videoRef} width={400} height={300} autoPlay/>
  );
};

export default Index;
