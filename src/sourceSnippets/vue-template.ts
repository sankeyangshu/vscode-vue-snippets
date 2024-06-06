import { Placeholders, SnippetType } from '../types';

/**
 * vue html模板代码片段
 */
interface templateMappingsType {
  vueFor: 'vfor';
  vueStyleBinding: 'vstyle';
  vueStyleBindingObject: 'vstyle-obj';
  vueClassBinding: 'vclass';
  vueClassBindingObject: 'vclass-obj';
  vueClassBindingObjectMultiple: 'vclass-obj-mult';
  vueVOnShortcut: 'von';
  vueNamedRoutingLink: 'vroutename';
  vueNamedRoutingLinkWithParams: 'vroutenameparam';
  vuePathRoutingLink: 'vroutepath';
  vueTransitionComponentWithJavaScriptHooks: 'vanim';
  vueComponent: 'vcomponent';
}

/**
 * vue html 代码片段类型
 */
export type VueTemplateSnippetType = SnippetType<templateMappingsType>;

/**
 * v-for 代码片段
 */
const vueFor: VueTemplateSnippetType = {
  key: 'vueFor',
  prefix: 'vfor',
  body: [
    `v-for="(${Placeholders.SecondTab}, ${Placeholders.ThirdTab}) in ${Placeholders.FirstTab}" :key="${Placeholders.FourthTab}"`,
  ],
  description: 'v-for statement',
};

/**
 * v-style 代码片段
 */
const vueStyleBinding: VueTemplateSnippetType = {
  key: 'vueStyleBinding',
  prefix: 'vstyle',
  body: [` :style="{ fontSize: ${Placeholders.FirstTab} + 'px' }"`],
  description: 'vue inline style binding',
};

/**
 * v-style-obj 代码片段
 */
const vueStyleBindingObject: VueTemplateSnippetType = {
  key: 'vueStyleBindingObject',
  prefix: 'vstyle-obj',
  body: [` :style="[${Placeholders.FirstTab}, ${Placeholders.SecondTab}]"`],
  description: 'vue inline style binding, objects',
};

/**
 * v-class 代码片段
 */
const vueClassBinding: VueTemplateSnippetType = {
  key: 'vueClassBinding',
  prefix: 'vclass',
  body: [` :class="{ ${Placeholders.FirstTab}: ${Placeholders.SecondTab} }"`],
  description: 'vue class binding',
};

/**
 * v-class-obj 代码片段
 */
const vueClassBindingObject: VueTemplateSnippetType = {
  key: 'vueClassBindingObject',
  prefix: 'vclass-obj',
  body: [` :class="[${Placeholders.FirstTab}, ${Placeholders.SecondTab}]"`],
  description: 'vue class binding',
};

/**
 * v-class-obj-mult 代码片段
 */
const vueClassBindingObjectMultiple: VueTemplateSnippetType = {
  key: 'vueClassBindingObjectMultiple',
  prefix: 'vclass-obj-mult',
  body: [
    ` :class="[${Placeholders.FirstTab}, {${Placeholders.SecondTab} : ${Placeholders.ThirdTab}}]"`,
  ],
  description: 'vue multiple conditional class bindings',
};

/**
 * v-on 代码片段
 */
const vueVOnShortcut: VueTemplateSnippetType = {
  key: 'vueVOnShortcut',
  prefix: 'von',
  body: [`@click="${Placeholders.FirstTab}(${Placeholders.SecondTab}, $event)"`],
  description: 'v-on click handler with arguments',
};

/**
 * vroutename 代码片段
 */
const vueNamedRoutingLink: VueTemplateSnippetType = {
  key: 'vueNamedRoutingLink',
  prefix: 'vroutename',
  body: [
    `<router-link :to="{name: '${Placeholders.FirstTab}'}">${Placeholders.SecondTab}</router-link>`,
  ],
  description: 'Named routing link',
};

/**
 * vroutenameparam 代码片段
 */
const vueNamedRoutingLinkWithParams: VueTemplateSnippetType = {
  key: 'vueNamedRoutingLinkWithParams',
  prefix: 'vroutenameparam',
  body: [
    `<router-link :to="{name: '${Placeholders.FirstTab}', params:{${Placeholders.SecondTab}: '${Placeholders.ThirdTab}'} }">${Placeholders.FourthTab}</router-link>`,
  ],
  description: 'Named routing link w/ params',
};

/**
 * vroutepath 代码片段
 */
const vuePathRoutingLink: VueTemplateSnippetType = {
  key: 'vuePathRoutingLink',
  prefix: 'vroutepath',
  body: [`<router-link to="${Placeholders.FirstTab}">${Placeholders.SecondTab}</router-link>`],
  description: 'Path routing link',
};

/**
 * vanim 代码片段
 */
const vueTransitionComponentWithJavaScriptHooks: VueTemplateSnippetType = {
  key: 'vueTransitionComponentWithJavaScriptHooks',
  prefix: 'vanim',
  body: [
    '<transition',
    '\tmode="out-in"',
    '\t@before-enter="beforeEnter"',
    '\t@enter="enter"',
    '',
    '\t@before-leave="beforeLeave"',
    '\t@leave="leave"',
    '\t:css="false">',
    '',
    '</transition>',
  ],
  description: 'transition component js hooks',
};

/**
 * vcomponent 代码片段
 */
const vueComponent: VueTemplateSnippetType = {
  key: 'vueComponent',
  prefix: 'vcomponent',
  body: [`<component :is="${Placeholders.FirstTab}"></component>$0`],
  description: 'component element',
};

export default [
  vueFor,
  vueStyleBinding,
  vueStyleBindingObject,
  vueClassBinding,
  vueClassBindingObject,
  vueClassBindingObjectMultiple,
  vueVOnShortcut,
  vueNamedRoutingLink,
  vueNamedRoutingLinkWithParams,
  vuePathRoutingLink,
  vueTransitionComponentWithJavaScriptHooks,
  vueComponent,
];
