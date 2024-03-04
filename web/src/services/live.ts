import request from "./request";
import meta from "@/meta";
const { list } = meta.LIVE;
export interface LIVE_INFO {
  id: string;
  name: string;
  class: string;
  src: string;
}

export const queryLiveList = (): Promise<any> => request({
    ...list,
  });

