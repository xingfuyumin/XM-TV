import { LIVE_INFO } from "@/services/live";
import { useEffect, useMemo, useState } from "react";

export default (
  liveKey: string,
  liveList: LIVE_INFO[]
) => {
  const [group, setGroup] = useState('');
  const groupMap = useMemo(() => {
    const map: Record<string, LIVE_INFO[]> = {};
    liveList?.forEach(d => {
      if (!map[d.class]) {
        map[d.class] = [];
      }
      map[d.class].push(d);
    });
    return map;
  }, [liveList]);
  useEffect(() => {
    const group = liveList?.find(d => d.id === liveKey)?.class;
    if (group) {
      setGroup(group);
    } else {
      setGroup('中央台');
    }
  }, [liveKey, liveList])
  return {
    groupMap,
    group,
    setGroup,
  };
}