/*
 *
 * 知乎日报 API 分析
 * https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90
 *
 * http://news-at.zhihu.com/api/4/start-image/1080*1776
 *
 * 最新消息
 * http://news-at.zhihu.com/api/4/news/latest
 *
 * 消息内容获取与离线下载
 * http://news-at.zhihu.com/api/4/news/3892357
 *
 * 过往消息
 * http://news.at.zhihu.com/api/4/news/before/20131119
 *
 * 新闻额外信息
 * http://news-at.zhihu.com/api/4/story-extra/#{id}
 *
 * 新闻对应长评论查看
 * http://news-at.zhihu.com/api/4/story/4232852/long-comments
 *
 * 新闻对应短评论查看
 * http://news-at.zhihu.com/api/4/story/4232852/short-comments
 *
 * 主题日报列表查看
 * http://news-at.zhihu.com/api/4/themes
 * */

import { domainConfig } from '../config/app';

const urlMapping = {

  // 最新消息
  latestNews: {
    url: `${domainConfig}api/4/news/latest/`,
    method: 'GET',
    params: {},
  },

  // 过往消息
  beforeNews: {
    url: `${domainConfig}api/4/news/before/`,
    method: 'GET',
    params: {
      id: '20131119',
    },
  },
};


export default urlMapping;

