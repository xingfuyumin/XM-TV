import { Service } from 'egg'

export default class Index extends Service {
  queryList = async () => {
    const { mysql } = this.app;
    const list = await mysql.select('live_info', {
      orders: [['class', 'asc'], ['order', 'asc']],
      columns: ['id', 'name', 'class', 'order'],
    });
    return list;
  }
  ts = async (id: string, url: string) => {
    const { mysql } = this.app;
    const d = await mysql.get('live_info', {
      id
    }, {
      columns: ['id', 'src', 'host'],
    });
    if (!d) {
      return;
    }
    const arr = d.src.split('/');
    if (url) {
      arr.pop();
      arr.push(url);
    }
    return [d.host, arr.join('/')];
  }

  m3u8 = async (id: string) => {
    const { mysql } = this.app;
    const d = await mysql.get('live_info', {
      id
    }, {
      columns: ['id', 'src', 'host'],
    });
    if (!d) {
      return '';
    }
    return [d.host, d.src];
  }
}