import { Controller } from 'egg';
export default class Index extends Controller {
  async list() {
    const { liveBase } = this.service;
    return liveBase.queryList();
  }
}