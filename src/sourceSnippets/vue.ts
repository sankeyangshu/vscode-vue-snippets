import { SnippetType } from '../types';
import {
  data,
  method,
  scriptSetup,
  scriptSetupTS,
  style,
  styleLess,
  stylePostCss,
  styleSass,
  styleScss,
  styleStylus,
  templateDiv,
} from './base';

/**
 * vue 代码片段
 */
interface VueMappingsType {
  vueSingleFileComponent: 'vinit';
  vueSingleFileComponentWithScss: 'vinit-scss';
  vueSingleFileComponentWithLess: 'vinit-less';
  vueSingleFileComponentWithSass: 'vinit-sass';
  vueSingleFileComponentWithStylus: 'vinit-stylus';
  vueSingleFileComponentWithPostCss: 'vinit-postcss';
  // vue composition Api 代码片段
  vueSingleFileComponentCompositionApi: 'vbase';
  vueSingleFileComponentCompositionApiWithScss: 'vbase-scss';
  vueSingleFileComponentCompositionApiWithLess: 'vbase-less';
  vueSingleFileComponentCompositionApiWithSass: 'vbase-sass';
  vueSingleFileComponentCompositionApiWithStylus: 'vbase-stylus';
  vueSingleFileComponentCompositionApiWithPostCss: 'vbase-postcss';
  // TS vue composition Api 代码片段
  vueSingleFileComponentCompositionApiWithTypescript: 'vts';
  vueSingleFileComponentCompositionApiWithTypescriptAndScss: 'vts-scss';
  vueSingleFileComponentCompositionApiWithTypescriptAndLess: 'vts-less';
  vueSingleFileComponentCompositionApiWithTypescriptAndSass: 'vts-sass';
  vueSingleFileComponentCompositionApiWithTypescriptAndStylus: 'vts-stylus';
  vueSingleFileComponentCompositionApiWithTypescriptAndPostCss: 'vts-postcss';
}

/**
 * vue 代码片段类型
 */
export type VueSnippetType = SnippetType<VueMappingsType>;

/**
 * vue单文件组件代码片段
 */
const vueSingleFileComponent: VueSnippetType = {
  key: 'vueSingleFileComponent',
  prefix: 'vinit',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...style,
  ],
  description: 'Base for Vue Single File Component',
};

/**
 * vue单文件组件代码片段（scss）
 */
const vueSingleFileComponentWithScss: VueSnippetType = {
  key: 'vueSingleFileComponentWithScss',
  prefix: 'vinit-scss',
  body: [
    ...templateDiv,
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
  description: 'Base for Vue Single File Component with SCSS',
};

/**
 * vue单文件组件代码片段（less）
 */
const vueSingleFileComponentWithLess: VueSnippetType = {
  key: 'vueSingleFileComponentWithLess',
  prefix: 'vinit-less',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...styleLess,
  ],
  description: 'Base for Vue Single File Component with Less',
};

/**
 * vue单文件组件代码片段（sass）
 */
const vueSingleFileComponentWithSass: VueSnippetType = {
  key: 'vueSingleFileComponentWithSass',
  prefix: 'vinit-sass',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...styleSass,
  ],
  description: 'Base for Vue Single File Component with Sass',
};

/**
 * vue单文件组件代码片段（stylus）
 */
const vueSingleFileComponentWithStylus: VueSnippetType = {
  key: 'vueSingleFileComponentWithStylus',
  prefix: 'vinit-stylus',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...styleStylus,
  ],
  description: 'Base for Vue Single File Component with Stylus',
};

/**
 * vue单文件组件代码片段（postcss）
 */
const vueSingleFileComponentWithPostCss: VueSnippetType = {
  key: 'vueSingleFileComponentWithPostCss',
  prefix: 'vinit-postcss',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...stylePostCss,
  ],
  description: 'Base for Vue Single File Component with PostCss',
};

/**
 * vue composition Api 代码片段
 */
const vueSingleFileComponentCompositionApi: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApi',
  prefix: 'vbase',
  body: [...templateDiv, '', ...scriptSetup, '', ...style],
  description: 'Base for Vue File Composition API',
};

/**
 * vue composition Api 代码片段（scss）
 */
const vueSingleFileComponentCompositionApiWithScss: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithScss',
  prefix: 'vbase-scss',
  body: [...templateDiv, '', ...scriptSetup, '', ...styleScss],
  description: 'Base for Vue File Composition API with SCSS',
};

/**
 * vue composition Api 代码片段（less）
 */
const vueSingleFileComponentCompositionApiWithLess: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithLess',
  prefix: 'vbase-less',
  body: [...templateDiv, '', ...scriptSetup, '', ...styleLess],
  description: 'Base for Vue File Composition API with Less',
};

/**
 * vue composition Api 代码片段（sass）
 */
const vueSingleFileComponentCompositionApiWithSass: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithSass',
  prefix: 'vbase-sass',
  body: [...templateDiv, '', ...scriptSetup, '', ...styleSass],
  description: 'Base for Vue File Composition API with Sass',
};

/**
 * vue composition Api 代码片段（stylus）
 */
const vueSingleFileComponentCompositionApiWithStylus: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithStylus',
  prefix: 'vbase-stylus',
  body: [...templateDiv, '', ...scriptSetup, '', ...styleStylus],
  description: 'Base for Vue File Composition API with Stylus',
};

/**
 * vue composition Api 代码片段（postcss）
 */
const vueSingleFileComponentCompositionApiWithPostCss: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithPostCss',
  prefix: 'vbase-postcss',
  body: [...templateDiv, '', ...scriptSetup, '', ...stylePostCss],
  description: 'Base for Vue File Composition API with PostCss',
};

/**
 * vue ts 单文件组件代码片段
 */
const vueSingleFileComponentCompositionApiWithTypescript: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithTypescript',
  prefix: 'vts',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...style],
  description: 'Base for Vue Single File Component with Typescript',
};

/**
 * vue ts 单文件组件代码片段（scss）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndScss: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithTypescriptAndScss',
  prefix: 'vts-scss',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...styleScss],
  description: 'Base for Vue Single File Component with Typescript and SCSS',
};

/**
 * vue ts 单文件组件代码片段（less）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndLess: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithTypescriptAndLess',
  prefix: 'vts-less',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...styleLess],
  description: 'Base for Vue Single File Component with Typescript and Less',
};

/**
 * vue ts 单文件组件代码片段（sass）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndSass: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithTypescriptAndSass',
  prefix: 'vts-sass',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...styleSass],
  description: 'Base for Vue Single File Component with Typescript and Sass',
};

/**
 * vue ts 单文件组件代码片段（stylus）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndStylus: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithTypescriptAndStylus',
  prefix: 'vts-stylus',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...styleStylus],
  description: 'Base for Vue Single File Component with Typescript and Stylus',
};

/**
 * vue ts 单文件组件代码片段（postcss）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndPostCss: VueSnippetType = {
  key: 'vueSingleFileComponentCompositionApiWithTypescriptAndPostCss',
  prefix: 'vts-postcss',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...stylePostCss],
  description: 'Base for Vue Single File Component with Typescript and PostCss',
};

export default [
  vueSingleFileComponent,
  vueSingleFileComponentWithScss,
  vueSingleFileComponentWithLess,
  vueSingleFileComponentWithSass,
  vueSingleFileComponentWithStylus,
  vueSingleFileComponentWithPostCss,
  vueSingleFileComponentCompositionApi,
  vueSingleFileComponentCompositionApiWithScss,
  vueSingleFileComponentCompositionApiWithLess,
  vueSingleFileComponentCompositionApiWithSass,
  vueSingleFileComponentCompositionApiWithStylus,
  vueSingleFileComponentCompositionApiWithPostCss,
  vueSingleFileComponentCompositionApiWithTypescript,
  vueSingleFileComponentCompositionApiWithTypescriptAndScss,
  vueSingleFileComponentCompositionApiWithTypescriptAndLess,
  vueSingleFileComponentCompositionApiWithTypescriptAndSass,
  vueSingleFileComponentCompositionApiWithTypescriptAndStylus,
  vueSingleFileComponentCompositionApiWithTypescriptAndPostCss,
];
