import { Placeholders, SnippetType } from '../types';
import { vue, vuex } from './base';

/**
 * vue vuex 代码片段
 */
interface vuexMappingsType {
  vuexStore: 'vxstore';
  vuexGetters: 'vxgetter';
  vuexMutation: 'vxmutation';
  vuexAction: 'vxaction';
  vuexModule: 'vxmodule';
}

/**
 * vue vuex 代码片段类型
 */
export type VuexSnippetType = SnippetType<vuexMappingsType>;

/**
 * vxstore 代码片段
 */
const vuexStore: VuexSnippetType = {
  key: 'vuexStore',
  prefix: 'vxstore',
  body: [
    ...vue,
    ...vuex,
    '',
    'Vue.use(Vuex);',
    '',
    'export default new Vuex.Store({',
    '\tmodules: {},',
    '\tstate: {',
    `\t\t${Placeholders.FirstTab}: ${Placeholders.SecondTab}`,
    '\t}',
    '\tmutations: {}',
    '\tactions: {}',
    '});',
  ],
  description: 'Base for Vuex store',
};

/**
 * vxgetter 代码片段
 */
const vuexGetters: VuexSnippetType = {
  key: 'vuexGetters',
  prefix: 'vxgetter',
  body: [
    'getters: {',
    `\t${Placeholders.FirstTab}: state => {`,
    `\t\treturn state.${Placeholders.SecondTab};`,
    '\t}',
    '}',
  ],
  description: 'vuex getter',
};

/**
 * vxmutation 代码片段
 */
const vuexMutation: VuexSnippetType = {
  key: 'vuexMutation',
  prefix: 'vxmutation',
  body: [
    'mutations: {',
    `\t${Placeholders.FirstTab}(state, ${Placeholders.ThirdTab}) {`,
    `\t\tstate.${Placeholders.SecondTab} = ${Placeholders.ThirdTab};`,
    '\t}',
    '}',
  ],
  description: 'vuex mutation',
};

/**
 * vxaction 代码片段
 */
const vuexAction: VuexSnippetType = {
  key: 'vuexAction',
  prefix: 'vxaction',
  body: [
    'actions: {',
    `\t${Placeholders.FirstTab}({commit}, ${Placeholders.SecondTab}) {`,
    `\t\tcommit('${Placeholders.FirstTab}', ${Placeholders.SecondTab});`,
    '\t}',
    '}',
  ],
  description: 'vuex action',
};

/**
 * vxmodule 代码片段
 */
const vuexModule: VuexSnippetType = {
  key: 'vuexModule',
  prefix: 'vxmodule',
  body: [
    'export default {',
    '\tstate: {',
    "\t\tvalue: 'my value'",
    '\t},',
    '\tgetters: {',
    '\t\tvalue: state => {',
    '\t\t\treturn state.value;',
    '\t\t}',
    '\t},',
    '\tmutations: {',
    '\t\tupdateValue(state, payload) {',
    '\t\t\tstate.value = payload;',
    '\t\t}',
    '\t},',
    '\tactions: {',
    '\t\tupdateValue({commit}, payload) {',
    "\t\t\tcommit('updateValue', payload);",
    '\t\t}',
    '\t}',
    '};',
  ],
  description: 'vuex module',
};

export default [vuexStore, vuexGetters, vuexMutation, vuexAction, vuexModule];
