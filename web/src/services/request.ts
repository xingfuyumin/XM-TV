import umiRequest, { RequestOptionsInit, RequestResponse } from "umi-request";
import { message } from "antd";

interface Request extends RequestOptionsInit {
  url: string;
}

export default async (request: Request) => {
  const { url, ...ext } = request;
  return umiRequest(url, ext)
    .then((res: { status: number; data: any; msg: string }) => {
      if (ext.responseType === "blob") {
        const response = res as any;
        const fileName = response.response.headers.get("fileName");
        return { data: response.data, name: fileName };
      }
      return res.data;
    })
    .catch((res: RequestResponse) => {
      if (res?.response?.status !== 200) {
        message.error(res.data?.msg || res.toString());
      }
      throw new Error("");
    });
};
