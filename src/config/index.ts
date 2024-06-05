import { workspace } from 'vscode';

/**
 * 扩展配置名称
 */
export const EXTENSION_NAME = 'vueSnippets.settings';

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
  uniappSnippets: boolean;

  // TODO： vue2 options模式代码支持待开发
  // vueOptionsHelper: boolean;
}

/**
 * 获取扩展配置
 * @return 扩展配置
 */
export const extensionConfig = () =>
  workspace.getConfiguration(EXTENSION_NAME) as unknown as ExtensionSettings;
