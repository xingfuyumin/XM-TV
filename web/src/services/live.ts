import request from "./request";
import meta from "@/meta";
const { list } = meta.LIVE;
export interface LIVE_INFO {
  id: string;
  name: string;
  class: string;
}

export const queryLiveList = (): Promise<LIVE_INFO[]> =>
  request({
    ...list,
  });

