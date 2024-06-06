import { Placeholders, SnippetType } from '../types';

/**
 * vue pinia 代码片段
 */
interface vuePiniaMappingsType {
  vuePiniaStore: 'vpinia';
  vuePiniaGetters: 'vgetter';
  vuePiniaAction: 'vaction';
}

/**
 * vue pinia 代码片段类型
 */
export type VuePiniaSnippetType = SnippetType<vuePiniaMappingsType>;

/**
 * vpinia 代码片段
 */
const vuePiniaStore: VuePiniaSnippetType = {
  key: 'vuePiniaStore',
  prefix: 'vpinia',
  body: [
    "import { defineStore } from 'pinia';",
    '',
    `export const ${Placeholders.FirstTab} = defineStore({`,
    `\tid: \'${Placeholders.SecondTab}\',`,
    '\tstate: () => ({',
    `\t\t${Placeholders.ThirdTab}: ${Placeholders.FourthTab}`,
    '\t}),',
    '});',
  ],
  description: 'Base for Pinia store',
};

/**
 * vgetter 代码片段
 */
const vuePiniaGetters: VuePiniaSnippetType = {
  key: 'vuePiniaGetters',
  prefix: 'vgetter',
  body: [
    'getters: {',
    `\t${Placeholders.FirstTab}: (state) => state.${Placeholders.SecondTab},`,
    '}',
  ],
  description: 'vue pinia getter',
};

/**
 * vaction 代码片段
 */
const vuePiniaAction: VuePiniaSnippetType = {
  key: 'vuePiniaAction',
  prefix: 'vaction',
  body: ['actions: {', `\t${Placeholders.FirstTab}(){`, '\t\t${2}', '\t}', '}'],
  description: 'vue pinia action',
};

export default [vuePiniaStore, vuePiniaGetters, vuePiniaAction];
