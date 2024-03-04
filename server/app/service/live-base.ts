import { Service } from 'egg'

export default class Index extends Service {
  queryList = async () => {
    const { mysql } = this.app;
    const list = await mysql.select('live_info', {
      orders: [['class', 'asc'], ['order', 'asc']],
      columns: ['id', 'name', 'class', 'src'],
    });
    return list;
  }
}