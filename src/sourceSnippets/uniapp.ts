import { Placeholders, SnippetType } from '../types';
import { data, method, scriptSetup, scriptSetupTS, styleScss, templateView } from './base';

/**
 * uniapp 代码片段
 */
interface uniappMappingsType {
  // uniapp 模版
  uniappTemplateOptions: 'uni2';
  uniappTemplateComposition: 'uni3';
  uniappTemplateTs: 'uni-ts';

  // uniapp options script 代码片段
  uniappOptionsOnLoad: 'u2onLoad';
  uniappOptionsOnShow: 'u2onShow';
  uniappOptionsOnReady: 'u2onReady';
  uniappOptionsOnHide: 'u2onHide';
  uniappOptionsOnUnload: 'u2onUnload';
  uniappOptionsOnPullDownRefresh: 'u2onPullDownRefresh';
  uniappOptionsOnReachBottom: 'u2onReachBottom';
  uniappOptionsOnShareAppMessage: 'u2onShareAppMessage';
  uniappOptionsOnPageScroll: 'u2onPageScroll';

  // uniapp composition script 代码片段
  uniappCompositionOnLoad: 'u3onLoad';
  uniappCompositionOnShow: 'u3onShow';
  uniappCompositionOnReady: 'u3onReady';
  uniappCompositionOnHide: 'u3onHide';
  uniappCompositionOnUnload: 'u3onUnload';
}

/**
 * uniapp 代码片段类型
 */
export type UniappSnippetType = SnippetType<uniappMappingsType>;

/**
 * uni2 代码片段
 */
const uniappTemplateOptions: UniappSnippetType = {
  key: 'uniappTemplateOptions',
  prefix: 'uni2',
  body: [
    ...templateView,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...styleScss,
  ],
  description: 'Uni-app Options Template',
};

/**
 * uni3 代码片段
 */
const uniappTemplateComposition: UniappSnippetType = {
  key: 'uniappTemplateComposition',
  prefix: 'uni3',
  body: [...templateView, '', ...scriptSetup, '', ...styleScss],
  description: 'Uni-app Composition Template',
};

/**
 * uni-ts 代码片段
 */
const uniappTemplateTs: UniappSnippetType = {
  key: 'uniappTemplateTs',
  prefix: 'uni-ts',
  body: [...templateView, '', ...scriptSetupTS, '', ...styleScss],
  description: 'Uni-app TS Template',
};

/**
 * uniapp options 监听页面加载
 */
const uniappOptionsOnLoad: UniappSnippetType = {
  key: 'uniappOptionsOnLoad',
  prefix: 'u2onLoad',
  body: [`onLoad(${Placeholders.FirstTab}) {`, '\t${0}', '},'],
  description: 'onLoad 监听页面加载',
};

/**
 * uniapp options 监听页面显示
 */
const uniappOptionsOnShow: UniappSnippetType = {
  key: 'uniappOptionsOnShow',
  prefix: 'u2onShow',
  body: ['onShow() {', '\t${0}', '},'],
  description: 'onShow 监听页面显示',
};

/**
 * uniapp options 监听页面初次渲染完成
 */
const uniappOptionsOnReady: UniappSnippetType = {
  key: 'uniappOptionsOnReady',
  prefix: 'u2onReady',
  body: ['onReady() {', '\t${0}', '},'],
  description: 'onReady 监听页面初次渲染完成',
};

/**
 * uniapp options 监听页面隐藏
 */
const uniappOptionsOnHide: UniappSnippetType = {
  key: 'uniappOptionsOnHide',
  prefix: 'u2onHide',
  body: ['onHide() {', '\t${0}', '},'],
  description: 'onHide 监听页面隐藏',
};

/**
 * uniapp options 监听页面卸载
 */
const uniappOptionsOnUnload: UniappSnippetType = {
  key: 'uniappOptionsOnUnload',
  prefix: 'u2onUnload',
  body: ['onUnload() {', '\t${0}', '},'],
  description: 'onUnload 监听页面卸载',
};

/**
 * uniapp options 监听用户下拉动作，一般用于下拉刷新
 */
const uniappOptionsOnPullDownRefresh: UniappSnippetType = {
  key: 'uniappOptionsOnPullDownRefresh',
  prefix: 'u2onPullDownRefresh',
  body: ['onPullDownRefresh() {', '\t${0}', '},'],
  description: 'onPullDownRefresh 监听用户下拉动作，一般用于下拉刷新',
};

/**
 * uniapp options 页面滚动到底部的事件
 */
const uniappOptionsOnReachBottom: UniappSnippetType = {
  key: 'uniappOptionsOnReachBottom',
  prefix: 'u2onReachBottom',
  body: ['onReachBottom() {', '\t${0}', '},'],
  description: 'onReachBottom 页面滚动到底部的事件',
};

/**
 * uniapp options 监听用户点击右上角转发
 */
const uniappOptionsOnShareAppMessage: UniappSnippetType = {
  key: 'uniappOptionsOnShareAppMessage',
  prefix: 'u2onShareAppMessage',
  body: ['onShareAppMessage() {', '\t${0}', '},'],
  description: 'onShareAppMessage 监听用户点击右上角转发',
};

/**
 * uniapp options 监听页面滚动
 */
const uniappOptionsOnPageScroll: UniappSnippetType = {
  key: 'uniappOptionsOnPageScroll',
  prefix: 'u2onPageScroll',
  body: ['onPageScroll() {', '\t${0}', '},'],
  description: 'onPageScroll 	监听页面滚动',
};

/**
 * uniapp composition 监听页面加载
 */
const uniappCompositionOnLoad: UniappSnippetType = {
  key: 'uniappCompositionOnLoad',
  prefix: 'u3onLoad',
  body: [`onLoad((${Placeholders.FirstTab}) => {`, '\t${0}', '})'],
  description: 'onLoad 监听页面加载',
};

/**
 * uniapp composition 监听页面显示
 */
const uniappCompositionOnShow: UniappSnippetType = {
  key: 'uniappCompositionOnShow',
  prefix: 'u3onShow',
  body: ['onShow(() => {', '\t${0}', '})'],
  description: 'onShow 监听页面显示',
};

/**
 * uniapp composition 监听页面初次渲染完成
 */
const uniappCompositionOnReady: UniappSnippetType = {
  key: 'uniappCompositionOnReady',
  prefix: 'u3onReady',
  body: ['onReady(() => {', '\t${0}', '})'],
  description: 'onReady 监听页面初次渲染完成',
};

/**
 * uniapp composition 监听页面隐藏
 */
const uniappCompositionOnHide: UniappSnippetType = {
  key: 'uniappCompositionOnHide',
  prefix: 'u3onHide',
  body: ['onHide(() => {', '\t${0}', '})'],
  description: 'onHide 监听页面隐藏',
};

/**
 * uniapp composition 监听页面卸载
 */
const uniappCompositionOnUnload: UniappSnippetType = {
  key: 'uniappCompositionOnUnload',
  prefix: 'u3onUnload',
  body: ['onUnload(() => {', '\t${0}', '})'],
  description: 'onUnload 监听页面卸载',
};

/**
 * uniapp template 代码片段集合
 */
export const uniappTemplateSnippets = [
  uniappTemplateOptions,
  uniappTemplateComposition,
  uniappTemplateTs,
];

/**
 * uniapp script 代码片段集合
 */
export const uniappCollectionSnippets = [
  uniappOptionsOnLoad,
  uniappOptionsOnShow,
  uniappOptionsOnReady,
  uniappOptionsOnHide,
  uniappOptionsOnUnload,
  uniappOptionsOnPullDownRefresh,
  uniappOptionsOnReachBottom,
  uniappOptionsOnShareAppMessage,
  uniappOptionsOnPageScroll,
  uniappCompositionOnLoad,
  uniappCompositionOnShow,
  uniappCompositionOnReady,
  uniappCompositionOnHide,
  uniappCompositionOnUnload,
];
