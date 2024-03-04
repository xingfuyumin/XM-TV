import { useSize } from "ahooks";

export default () => {

  const size = useSize(document.body);
  const width = size?.width || document.body.offsetWidth;
  const height = size?.height || document.body.offsetHeight;
  return width > height;

}