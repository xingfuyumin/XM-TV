import { LIVE_INFO, queryLiveList } from "@/services/live";
import usePc from "@/utils/hooks/usePc";
import { useSearchParams } from "@umijs/max";
import { useRequest } from "ahooks";
import { useEffect, useRef } from "react";

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isPc = usePc();
  const hlsRef = useRef<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { data: liveList, loading } = useRequest(() => queryLiveList(), {
    cacheKey: 'queryLiveList',
    cacheTime: -1,
    staleTime: -1,
  });
  const liveKey = searchParams.get('key') || '';
  const handleLiveKeyChange = (v: string) => {
    searchParams.set('key', v);
    setSearchParams(searchParams);
  }
  useEffect(() => {
    const Hls = (window as any).Hls;
    const video = videoRef.current;
    if (Hls.isSupported() && video) {
      hlsRef.current = new Hls();
    }
  }, []);
  useEffect(() => {
    const video = videoRef.current
    const src = liveList?.find((d: LIVE_INFO) => d.id === liveKey)?.src;
    if (hlsRef.current && video) {
      if (src) {
        hlsRef.current.loadSource(src);
        hlsRef.current.attachMedia(video);
      } else if (liveList?.filter((d: LIVE_INFO) => d.src).length) {
        handleLiveKeyChange(liveList?.find((d: LIVE_INFO) => d.src)[0]);
      }
    }
  }, [liveKey, liveList]);
  return {
    liveKey,
    liveList,
    loading,
    videoRef,
    handleLiveKeyChange,
    isPc,
  };
}