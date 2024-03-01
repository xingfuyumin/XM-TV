
export default ({ router, controller }) => {
  const map = {
    '/lives': controller.liveBase.list,
  }
  Object.entries(map).forEach(([k, v]) => {
    const [path, method] = k.split('_');
    router[method || 'get'](`/api/v1${path}`, v);
  });
}