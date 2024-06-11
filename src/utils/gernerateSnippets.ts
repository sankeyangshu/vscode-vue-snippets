import path from 'path';
import { extensionConfig } from '../config';
import VueSnippets, { VueSnippetType } from '../sourceSnippets/vue';
import VueTemplateSnippets, { VueTemplateSnippetType } from '../sourceSnippets/vue-template';
import VueScriptSnippets, { vueScriptSnippetType } from '../sourceSnippets/vue-script';
import VueRouterSnippets, { VueRouterSnippetType } from '../sourceSnippets/vue-router';
import VuexSnippets, { VuexSnippetType } from '../sourceSnippets/vue-vuex';
import VuePiniaSnippets, { VuePiniaSnippetType } from '../sourceSnippets/vue-pinia';
import {
  UniappSnippetType,
  uniappTemplateSnippets,
  uniappCollectionSnippets,
} from '../sourceSnippets/uniapp';
import { formatSnippetPlaceholders, formatUseVueTemplateSnippets } from './formatters';
import { mkdir, access, writeFile, constants } from 'fs/promises';

/**
 * 代码片段 key 类型
 */
export type SnippetKeysType =
  | VueSnippetType['key']
  | VueTemplateSnippetType['key']
  | vueScriptSnippetType['key']
  | VueRouterSnippetType['key']
  | VuexSnippetType['key']
  | VuePiniaSnippetType['key']
  | UniappSnippetType['key'];

/**
 * 所有代码片段类型
 */
export type snippetAllType =
  | VueSnippetType
  | VueTemplateSnippetType
  | vueScriptSnippetType
  | VueRouterSnippetType
  | VuexSnippetType
  | VuePiniaSnippetType
  | UniappSnippetType;

/**
 * 代码片段总对象类型
 */
export type snippetsObjType = {
  [key in SnippetKeysType]: snippetAllType;
};

/**
 * 获取代码片段
 * @param {string} scope 支持的语言
 * @param {snippetAllType[]} list 所有代码片段
 * @return 格式化好的代码片段
 */
const getSnippets = (scope: string, list: snippetAllType[]) => {
  const snippets = list.reduce((acc, cur) => {
    acc[cur.key] = Object.assign(cur, {
      body: cur.body,
      scope: scope,
    });
    return acc;
  }, {} as snippetsObjType);

  return formatSnippetPlaceholders(JSON.stringify(snippets, null, 2));
};

/**
 * 生成代码片段
 */
export const generateSnippets = async () => {
  try {
    const { languageScopes, vuexCodeSnippets, uniappCodeSnippets } = extensionConfig();

    // 语言列表
    const scopeList = [
      {
        scope: 'vue',
        list: [
          ...formatUseVueTemplateSnippets(VueSnippets),
          ...(uniappCodeSnippets ? uniappTemplateSnippets : []),
        ],
      },
      {
        scope: 'html',
        list: [...VueTemplateSnippets],
      },
      {
        scope: languageScopes,
        list: [
          ...(vuexCodeSnippets ? VuexSnippets : []),
          ...(uniappCodeSnippets ? uniappCollectionSnippets : []),
          ...VueScriptSnippets,
          ...VueRouterSnippets,
          ...VuePiniaSnippets,
        ],
      },
    ];

    for (let i = 0; i < scopeList.length; i++) {
      const item = scopeList[i];

      const snippetList = getSnippets(item.scope, item.list);

      // 要写入的文件路径
      let tPath = '';
      const outputPath = path.join(__dirname, '..', 'dist', 'snippets');

      // 判断语言类型，写入不同的文件
      if (item.scope === 'vue') {
        tPath = 'vue.json';
      } else if (item.scope === 'html') {
        tPath = 'vue-template.json';
      } else {
        tPath = 'vue-script.json';
      }

      // 构建 snippets 目录下的 json 文件的路径
      const filePath = path.join(outputPath, tPath);

      // 监测文件是否存在，不存在则创建
      await mkdir(outputPath, { recursive: true });

      // 确保文件可读写
      await access(outputPath, constants.R_OK | constants.W_OK);

      // 写入文件
      await writeFile(filePath, snippetList, 'utf8');
    }
  } catch (err) {
    console.log(err);
  }
};
