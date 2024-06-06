import { workspace } from 'vscode';

/**
 * 扩展配置名称
 */
export const EXTENSION_NAME = 'vueSnippets';

/**
 * 扩展配置设置
 */
export const EXTENSION_SETTINGS = 'vueSnippets.settings';

/**
 * 扩展配置类型
 */
export interface ExtensionSettings {
  /**
   * 支持的语言
   */
  languageScopes: string;

  /**
   * 是否启用uniapp 代码片段支持
   */
  uniappCodeSnippets: boolean;

  /**
   * 是否启用 vuex 代码片段支持
   */
  vuexCodeSnippets: boolean;

  // TODO： vue2 options模式代码支持待开发
  // vueOptionsHelper: boolean;
}

/**
 * 获取扩展配置
 * @return 扩展配置
 */
export const extensionConfig = () =>
  workspace.getConfiguration(EXTENSION_SETTINGS) as unknown as ExtensionSettings;
