import { Placeholders, SnippetType } from '../types';

/**
 * vue script 代码片段
 */
interface vueScriptMappingsType {
  vueData: 'vdata';
  vueProps: 'vprops';
  vueMethods: 'vmethod';
  vueComputed: 'vcomputed';
  vueWatch: 'vwatcher';
  vueWatchOptions: 'vwatcher-options';
  vueFilter: 'vfilter';
  vueImportComponent: 'vcomponents';
  vueEmit: 'vemit';
  vueNextTick: 'vnexttick';
  vueSet: 'vset';
  vueDelete: 'vdelete';
  vueLifecycleBeforeCreate: 'vbeforecreate';
  vueLifecycleCreated: 'vcreated';
  vueLifecycleBeforeMount: 'vbeforemount';
  vueLifecycleMounted: 'vmounted';
  vueLifecycleBeforeUpdate: 'vbeforeupdate';
  vueLifecycleUpdated: 'vupdated';
  vueLifecycleBeforeDestroy: 'vbeforedestroy';
  vueLifecycleDestroyed: 'vdestroyed';
  vueLifecycleBeforeUnmount: 'vbeforeunmount';
  vueLifecycleUnmounted: 'vunmounted';
  vueCompositionApiRef: 'v3ref';
  vueCompositionApiReactive: 'v3reactive';
  vueCompositionApiComputed: 'v3computed';
  vueCompositionApiWatch: 'v3watch';
  vueCompositionApiWatchArray: 'v3watch-array';
  vueCompositionApiWatchEffect: 'v3watcheffect';
  vueLifecycleHooksOnBeforeMount: 'v3onbeforemount';
  vueLifecycleHooksOnMounted: 'v3onmounted';
  vueLifecycleHooksOnBeforeUpdate: 'v3onbeforeupdate';
  vueLifecycleHooksOnUpdated: 'v3onupdated';
  vueLifecycleHooksOnErrorCaptured: 'v3onerrorcaptured';
  vueLifecycleHooksOnBeforeUnmount: 'v3onbeforeunmount';
  vueLifecycleHooksOnUnmounted: 'v3onunmounted';
}

/**
 * vue script 代码片段类型
 */
export type vueScriptSnippetType = SnippetType<vueScriptMappingsType>;

/**
 * v-data 代码片段
 */
const vueData: vueScriptSnippetType = {
  key: 'vueData',
  prefix: 'vdata',
  body: [
    'data() {',
    '\treturn {',
    `\t\t${Placeholders.FirstTab}: ${Placeholders.SecondTab}`,
    '\t}',
    '},',
  ],
  description: 'Vue Component Data',
};

/**
 * v-props 代码片段
 */
const vueProps: vueScriptSnippetType = {
  key: 'vueProps',
  prefix: 'vprops',
  body: [
    'props: {',
    `\t${Placeholders.FirstTab}: {`,
    `\t\ttype: ${Placeholders.SecondTab},`,
    `\t\tdefault: ${Placeholders.ThirdTab}`,
    '\t}',
    '},',
  ],
  description: 'Vue Component Props',
};

/**
 * v-method 代码片段
 */
const vueMethods: vueScriptSnippetType = {
  key: 'vueMethods',
  prefix: 'vmethod',
  body: ['methods: {', `\t${Placeholders.FirstTab}() {`, '\t\t${0}', '\t}', '},'],
  description: 'Vue Component Methods',
};

/**
 * v-computed 代码片段
 */
const vueComputed: vueScriptSnippetType = {
  key: 'vueComputed',
  prefix: 'vcomputed',
  body: [
    'computed: {',
    `\t${Placeholders.FirstTab}() {`,
    `\t\treturn this.${Placeholders.SecondTab}`,
    '\t}',
    '},',
  ],
  description: 'Vue Component Computed',
};

/**
 * v-watch 代码片段
 */
const vueWatch: vueScriptSnippetType = {
  key: 'vueWatch',
  prefix: 'vwatcher',
  body: [
    'watch: {',
    `\t${Placeholders.FirstTab}(${Placeholders.SecondTab}, ${Placeholders.ThirdTab}) {`,
    '\t\t${0}',
    '\t}',
    '},',
  ],
  description: 'Vue Component Watcher',
};

/**
 * v-watch-options 代码片段
 */
const vueWatchOptions: vueScriptSnippetType = {
  key: 'vueWatchOptions',
  prefix: 'vwatcher-options',
  body: [
    'watch: {',
    `\t${Placeholders.FirstTab}: {`,
    `\t\timmediate: ${Placeholders.SecondTab},`,
    `\t\tdeep: ${Placeholders.ThirdTab},`,
    `\t\thandler(${Placeholders.FourthTab}, ${Placeholders.FifthTab}) {`,
    '\t\t\t${0}',
    '\t\t}',
    '\t}',
    '},',
  ],
  description: 'Vue Component Watcher with Options',
};

/**
 * v-filter 代码片段
 */
const vueFilter: vueScriptSnippetType = {
  key: 'vueFilter',
  prefix: 'vfilter',
  body: [
    'filters: {',
    `\t${Placeholders.FirstTab}(${Placeholders.SecondTab}) {`,
    '\t\treturn ${0};',
    '\t}',
    '},',
  ],
  description: 'Vue Component Filter',
};

/**
 * v-components 代码片段
 */
const vueImportComponent: vueScriptSnippetType = {
  key: 'vueImportComponent',
  prefix: 'vcomponents',
  body: ['components: {', `\t${Placeholders.FirstTab},`, '},'],
  description: 'Import one component into another, within export statement',
};

/**
 * v-emit 代码片段
 */
const vueEmit: vueScriptSnippetType = {
  key: 'vueEmit',
  prefix: 'vemit',
  body: [`${Placeholders.FirstTab}.\\$emit('${Placeholders.SecondTab}', ${Placeholders.ThirdTab})`],
  description: 'Vue Emit',
};

/**
 * v-nextTick 代码片段
 */
const vueNextTick: vueScriptSnippetType = {
  key: 'vueNextTick',
  prefix: 'vnexttick',
  body: [`${Placeholders.FirstTab}.\\$nextTick(() => {`, '\t${0}', '});'],
  description: 'Vue NextTick',
};

/**
 * v-set 代码片段
 */
const vueSet: vueScriptSnippetType = {
  key: 'vueSet',
  prefix: 'vset',
  body: [
    `${Placeholders.FirstTab}.\\$set(${Placeholders.SecondTab}, ${Placeholders.ThirdTab}, ${Placeholders.FourthTab})`,
  ],
  description: 'Vue Set',
};

/**
 * v-delete 代码片段
 */
const vueDelete: vueScriptSnippetType = {
  key: 'vueDelete',
  prefix: 'vdelete',
  body: [`${Placeholders.FirstTab}.\\$delete(${Placeholders.SecondTab}, ${Placeholders.ThirdTab})`],
  description: 'Vue Delete',
};

/**
 * vue lifecycle beforeCreate 代码片段
 */
const vueLifecycleBeforeCreate: vueScriptSnippetType = {
  key: 'vueLifecycleBeforeCreate',
  prefix: 'vbeforecreate',
  body: ['beforeCreate () {', '\t${0};', '},'],
  description: 'beforeCreate lifecycle method',
};

/**
 * vue lifecycle created 代码片段
 */
const vueLifecycleCreated: vueScriptSnippetType = {
  key: 'vueLifecycleCreated',
  prefix: 'vcreated',
  body: ['created () {', '\t${0};', '},'],
  description: 'created lifecycle method',
};

/**
 * vue lifecycle beforeMount 代码片段
 */
const vueLifecycleBeforeMount: vueScriptSnippetType = {
  key: 'vueLifecycleBeforeMount',
  prefix: 'vbeforemount',
  body: ['beforeMount () {', '\t${0};', '},'],
  description: 'beforeMount lifecycle method',
};

/**
 * vue lifecycle mounted 代码片段
 */
const vueLifecycleMounted: vueScriptSnippetType = {
  key: 'vueLifecycleMounted',
  prefix: 'vmounted',
  body: ['mounted () {', '\t${0};', '},'],
  description: 'mounted lifecycle method',
};

/**
 * vue lifecycle beforeUpdate 代码片段
 */
const vueLifecycleBeforeUpdate: vueScriptSnippetType = {
  key: 'vueLifecycleBeforeUpdate',
  prefix: 'vbeforeupdate',
  body: ['beforeUpdate () {', '\t${0};', '},'],
  description: 'beforeUpdate lifecycle method',
};

/**
 * vue lifecycle updated 代码片段
 */
const vueLifecycleUpdated: vueScriptSnippetType = {
  key: 'vueLifecycleUpdated',
  prefix: 'vupdated',
  body: ['updated () {', '\t${0};', '},'],
  description: 'updated lifecycle method',
};

/**
 * vue lifecycle beforeDestroy 代码片段
 */
const vueLifecycleBeforeDestroy: vueScriptSnippetType = {
  key: 'vueLifecycleBeforeDestroy',
  prefix: 'vbeforedestroy',
  body: ['beforeDestroy () {', '\t${0};', '},'],
  description: 'beforeDestroy lifecycle method',
};

/**
 * vue lifecycle destroyed 代码片段
 */
const vueLifecycleDestroyed: vueScriptSnippetType = {
  key: 'vueLifecycleDestroyed',
  prefix: 'vdestroyed',
  body: ['destroyed () {', '\t${0};', '},'],
  description: 'destroyed lifecycle method',
};

/**
 * vue lifecycle beforeUnmount 代码片段
 */
const vueLifecycleBeforeUnmount: vueScriptSnippetType = {
  key: 'vueLifecycleBeforeUnmount',
  prefix: 'vbeforeunmount',
  body: ['beforeUnmount () {', '\t${0};', '},'],
  description: 'beforeUnmount lifecycle method',
};

/**
 * vue lifecycle unmounted 代码片段
 */
const vueLifecycleUnmounted: vueScriptSnippetType = {
  key: 'vueLifecycleUnmounted',
  prefix: 'vunmounted',
  body: ['unmounted () {', '\t${0};', '},'],
  description: 'unmounted lifecycle method',
};

/**
 * vue composition api ref 代码片段
 */
const vueCompositionApiRef: vueScriptSnippetType = {
  key: 'vueCompositionApiRef',
  prefix: 'v3ref',
  body: [`const ${Placeholders.FirstTab} = ref(\${2})`],
  description: 'Vue Composition api -  Ref',
};

/**
 * vue composition api reactive 代码片段
 */
const vueCompositionApiReactive: vueScriptSnippetType = {
  key: 'vueCompositionApiReactive',
  prefix: 'v3reactive',
  body: [`const ${Placeholders.FirstTab} = reactive({`, '\t${2}', '})'],
  description: 'Vue Composition api -  Reactive',
};

/**
 * vue composition api computed 代码片段
 */
const vueCompositionApiComputed: vueScriptSnippetType = {
  key: 'vueCompositionApiComputed',
  prefix: 'v3computed',
  body: [`const ${Placeholders.FirstTab} = computed(() => {`, '\treturn ${2}', '})'],
  description: 'Vue Composition api - computed',
};

/**
 * vue composition api watch 代码片段
 */
const vueCompositionApiWatch: vueScriptSnippetType = {
  key: 'vueCompositionApiWatch',
  prefix: 'v3watch',
  body: [`watch(() => ${Placeholders.FirstTab}, (newValue, oldValue) => {`, '\t${2}', '})'],
  description: 'Vue Composition api - watcher single source',
};

/**
 * vue composition api watch array 代码片段
 */
const vueCompositionApiWatchArray: vueScriptSnippetType = {
  key: 'vueCompositionApiWatchArray',
  prefix: 'v3watch-array',
  body: [
    `watch([${Placeholders.FirstTab}, ${Placeholders.SecondTab}], ([new${Placeholders.FirstCapitalize}, new${Placeholders.SecondCapitalize}], [prev${Placeholders.FirstCapitalize}, prev${Placeholders.SecondCapitalize}]) => {`,
    '\t${3}',
    '})',
  ],
  description: 'Vue Composition api - watch as array',
};

/**
 * vue composition api watcheffect 代码片段
 */
const vueCompositionApiWatchEffect: vueScriptSnippetType = {
  key: 'vueCompositionApiWatchEffect',
  prefix: 'v3watcheffect',
  body: ['watchEffect(() => {', '\t${1}', '})'],
  description: 'Vue Composition api - watch as array',
};

/**
 * vue composition api Lifecycle onBeforeMount 代码片段
 */
const vueLifecycleHooksOnBeforeMount: vueScriptSnippetType = {
  key: 'vueLifecycleHooksOnBeforeMount',
  prefix: 'v3onbeforemount',
  body: ['onBeforeMount(() => {', '\t${1}', '})'],
  description: 'Vue onBeforeMount Lifecycle hook',
};

/**
 * vue composition api Lifecycle onMounted 代码片段
 */
const vueLifecycleHooksOnMounted: vueScriptSnippetType = {
  key: 'vueLifecycleHooksOnMounted',
  prefix: 'v3onmounted',
  body: ['onMounted(() => {', '\t${1}', '})'],
  description: 'Vue Mounted Lifecycle hook',
};

/**
 * vue composition api Lifecycle onBeforeUpdate 代码片段
 */
const vueLifecycleHooksOnBeforeUpdate: vueScriptSnippetType = {
  key: 'vueLifecycleHooksOnBeforeUpdate',
  prefix: 'v3onbeforeupdate',
  body: ['onBeforeUpdate(() => {', '\t${1}', '})'],
  description: 'Vue onBeforeUpdate Lifecycle hook',
};

/**
 * vue composition api Lifecycle onUpdated 代码片段
 */
const vueLifecycleHooksOnUpdated: vueScriptSnippetType = {
  key: 'vueLifecycleHooksOnUpdated',
  prefix: 'v3onupdated',
  body: ['onUpdated(() => {', '\t${1}', '})'],
  description: 'Vue onUpdated Lifecycle hook',
};

/**
 * vue composition api Lifecycle onUnmounted 代码片段
 */
const vueLifecycleHooksOnUnmounted: vueScriptSnippetType = {
  key: 'vueLifecycleHooksOnUnmounted',
  prefix: 'v3onunmounted',
  body: ['onUnmounted(() => {', '\t${1}', '})'],
  description: '(destroyed) Vue onUnmounted Lifecycle hook',
};

/**
 * vue composition api Lifecycle onBeforeUnmount 代码片段
 */
const vueLifecycleHooksOnBeforeUnmount: vueScriptSnippetType = {
  key: 'vueLifecycleHooksOnBeforeUnmount',
  prefix: 'v3onbeforeunmount',
  body: ['onBeforeUnmount(() => {', '\t${1}', '})'],
  description: '(beforeDestroy) Vue onBeforeUnmount Lifecycle hook',
};

/**
 * vue composition api Lifecycle onErrorCaptured 代码片段
 */
const vueLifecycleHooksOnErrorCaptured: vueScriptSnippetType = {
  key: 'vueLifecycleHooksOnErrorCaptured',
  prefix: 'v3onerrorcaptured',
  body: ['onErrorCaptured(() => {', '\t${1}', '})'],
  description: 'Vue onErrorCaptured Lifecycle hook',
};

export default [
  vueData,
  vueProps,
  vueMethods,
  vueComputed,
  vueWatch,
  vueWatchOptions,
  vueFilter,
  vueImportComponent,
  vueEmit,
  vueNextTick,
  vueSet,
  vueDelete,
  vueLifecycleBeforeCreate,
  vueLifecycleCreated,
  vueLifecycleBeforeMount,
  vueLifecycleMounted,
  vueLifecycleBeforeUpdate,
  vueLifecycleUpdated,
  vueLifecycleBeforeDestroy,
  vueLifecycleDestroyed,
  vueLifecycleBeforeUnmount,
  vueLifecycleUnmounted,
  vueCompositionApiRef,
  vueCompositionApiReactive,
  vueCompositionApiComputed,
  vueCompositionApiWatch,
  vueCompositionApiWatchArray,
  vueCompositionApiWatchEffect,
  vueLifecycleHooksOnBeforeMount,
  vueLifecycleHooksOnMounted,
  vueLifecycleHooksOnBeforeUpdate,
  vueLifecycleHooksOnUpdated,
  vueLifecycleHooksOnErrorCaptured,
  vueLifecycleHooksOnBeforeUnmount,
  vueLifecycleHooksOnUnmounted,
];
