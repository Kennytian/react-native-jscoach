import fetchFactory from 'fetch-factory';
import { domainConfig } from './../config/app';

// http://news-at.zhihu.com/api/4/news/latest
const News = fetchFactory.create({
  url: `${domainConfig.API_DOMAIN}/api/4/news/latest`,
}, {
  findAll: { method: 'GET' },
});

export default News;
