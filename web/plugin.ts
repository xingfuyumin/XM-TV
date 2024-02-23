import { IApi } from 'umi';


const applyHtmlTemplate = (api: IApi) => {
  api.modifyHTML(($) => {
    $(
      `<script src="//cdn.jsdelivr.net/npm/hls.js@latest"></script>`,
    ).insertAfter('#root');
    $(
      `<script src="https://cdn.jsdelivr.net/npm/webtorrent@latest/webtorrent.min.js" as></script>`,
    ).insertAfter('#root');
    return $;
  });
};

export default (api: IApi) => {
  applyHtmlTemplate(api);
};