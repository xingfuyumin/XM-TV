import { IApi } from 'umi';


const applyHtmlTemplate = (api: IApi) => {
  api.modifyHTML(($) => {
    $(
      `<script src="//cdn.jsdelivr.net/npm/hls.js@latest"></script>`,
    ).insertAfter('#root');
    return $;
  });
};

export default (api: IApi) => {
  applyHtmlTemplate(api);
};