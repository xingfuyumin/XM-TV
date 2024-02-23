import { useEffect } from "react";

const Index: React.FC = () => {
  useEffect(() => {
    const client = new (window as any).WebTorrent();
    const magnetURI = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent';
    console.log(client.add);
    const d = client.add(magnetURI, {}, function (torrent: any) {
      console.log(333, torrent);
      // Torrent 文件已准备好
      const file = torrent.files.find(function (file: any) {
        return file.name.endsWith('.mp4'); // 寻找视频文件，这里以 .mp4 为例
      });

      // 将文件流传输到 video 标签进行播放
      file.renderTo('video#player');
    });
    console.log(d);
    setInterval(() => {
      console.log(d);
    }, 3000)
  }, []);
  return (
    <video id="player" width={400} height={300} autoPlay />
  );
};

export default Index;