import { Placeholders, SnippetType } from '../types';

/**
 * vue router 代码片段
 */
interface routerMappingsType {
  vueRouterBase: 'vrouter';
  vueRouterScrollBehavior: 'vscrollbehavior';
  vueRouterBeforeEach: 'vbeforeeach';
  vueRouterBeforeResolve: 'vbeforeresolve';
  vueRouterAfterEach: 'vaftereach';
  vueRouterBeforeEnter: 'vbeforeenter';
  vueRouterBeforeRouteEnter: 'vbeforerouteenter';
  vueRouterBeforeRouteUpdate: 'vbeforerouteupdate';
  vueRouterBeforeRouteLeave: 'vbeforerouteleave';
  vueRouterRouteName: 'vroute-named';
  vueRouterHooks: 'v3router';
  vueRouteHooks: 'v3route';
}
/**
 * vue router 代码片段类型
 */
export type VueRouterSnippetType = SnippetType<routerMappingsType>;

/**
 * v-router 代码片段
 */
const vueRouterBase: VueRouterSnippetType = {
  key: 'vueRouterBase',
  prefix: 'vrouter',
  body: [
    'import { createApp } from Vue;',
    "import { createRouter, createWebHashHistory } from 'vue-router';",
    '',
    'export const router = createRouter({',
    '\thistory: createWebHashHistory(),',
    '\troutes: [',
    "\t\t{ path: '/path', component: component }",
    '\t]',
    '});',
  ],
  description: 'Base for Vue Router',
};

/**
 * v-scrollbehavior 代码片段
 */
const vueRouterScrollBehavior: VueRouterSnippetType = {
  key: 'vueRouterScrollBehavior',
  prefix: 'vscrollbehavior',
  body: [
    'scrollBehavior(to, from, savedPosition) {',
    '\tif(savedPosition) {',
    '\t\treturn savedPosition;',
    '\t} else {',
    '\t\treturn { x: 0, y: 0 };',
    '\t}',
    '},',
  ],
  description: 'Vue Router scrollBehavior',
};

/**
 * v-beforeeach 代码片段
 */
const vueRouterBeforeEach: VueRouterSnippetType = {
  key: 'vueRouterBeforeEach',
  prefix: 'vbeforeeach',
  body: ['router.beforeEach((to, from, next) => {', `\t${Placeholders.FirstTab}`, '});'],
  description: 'Vue Router global guards beforeEach',
};

/**
 * v-beforeresolve 代码片段
 */
const vueRouterBeforeResolve: VueRouterSnippetType = {
  key: 'vueRouterBeforeResolve',
  prefix: 'vbeforeresolve',
  body: ['router.beforeResolve((to, from, next) => {', `\t${Placeholders.FirstTab}`, '});'],
  description: 'Vue Router global guards beforeResolve',
};

/**
 * v-aftereach 代码片段
 */
const vueRouterAfterEach: VueRouterSnippetType = {
  key: 'vueRouterAfterEach',
  prefix: 'vaftereach',
  body: ['router.afterEach((to, from) => {', '\t', '});'],
  description: 'Vue Router global guards afterEach',
};

/**
 * v-beforeenter 代码片段
 */
const vueRouterBeforeEnter: VueRouterSnippetType = {
  key: 'vueRouterBeforeEnter',
  prefix: 'vbeforeenter',
  body: ['beforeEnter(to, from, next) {', `\t${Placeholders.FirstTab}`, '},'],
  description: 'Vue Router per-route guard beforeEnter',
};

/**
 * v-beforerouteenter 代码片段
 */
const vueRouterBeforeRouteEnter: VueRouterSnippetType = {
  key: 'vueRouterBeforeRouteEnter',
  prefix: 'vbeforerouteenter',
  body: ['beforeRouteEnter(to, from, next) {', `\tnext(vm => {${Placeholders.FirstTab}});`, '},'],
  description: 'Vue Router component guards beforeRouteEnter',
};

/**
 * v-beforerouteupdate 代码片段
 */
const vueRouterBeforeRouteUpdate: VueRouterSnippetType = {
  key: 'vueRouterBeforeRouteUpdate',
  prefix: 'vbeforerouteupdate',
  body: ['beforeRouteUpdate(to, from, next) {', `\t${Placeholders.FirstTab}`, '},'],
  description: 'Vue Router component guards beforeRouteUpdate',
};

/**
 * v-beforeroutelave 代码片段
 */
const vueRouterBeforeRouteLeave: VueRouterSnippetType = {
  key: 'vueRouterBeforeRouteLeave',
  prefix: 'vbeforerouteleave',
  body: ['beforeRouteLeave(to, from, next) {', `\t${Placeholders.FirstTab}`, '},'],
  description: 'Vue Router component guards beforeRouteLeave',
};

/**
 * v-route named 代码片段
 */
const vueRouterRouteName: VueRouterSnippetType = {
  key: 'vueRouterRouteName',
  prefix: 'vroute-named',
  body: [
    '{',
    `\tpath: '${Placeholders.FirstTab}',`,
    `\tname: '${Placeholders.SecondTab}',`,
    `\tcomponent: () => import('./${Placeholders.ThirdTab}'),`,
    '},',
  ],
  description: 'Vue Router route with per route code-splitting',
};

/**
 * v-route hooks router 代码片段
 */
const vueRouterHooks: VueRouterSnippetType = {
  key: 'vueRouterHooks',
  prefix: 'v3router',
  body: ['const router = useRouter()'],
  description: 'Vue Router hooks',
};

/**
 * v-route hooks route 代码片段
 */
const vueRouteHooks: VueRouterSnippetType = {
  key: 'vueRouteHooks',
  prefix: 'v3route',
  body: ['const route = useRoute()'],
  description: 'Vue Route hooks',
};

export default [
  vueRouterBase,
  vueRouterScrollBehavior,
  vueRouterBeforeEach,
  vueRouterBeforeResolve,
  vueRouterAfterEach,
  vueRouterBeforeEnter,
  vueRouterBeforeRouteEnter,
  vueRouterBeforeRouteUpdate,
  vueRouterBeforeRouteLeave,
  vueRouterRouteName,
  vueRouterHooks,
  vueRouteHooks,
];
