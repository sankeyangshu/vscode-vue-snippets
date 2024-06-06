import { commands, ConfigurationChangeEvent, ExtensionContext, window, workspace } from 'vscode';
import { EXTENSION_NAME } from './config';
import { generateSnippets } from './utils/gernerateSnippets';

/**
 * 当配置发生变化时，提示用户重启扩展
 */
const showRestartExtensionMessage = async ({ affectsConfiguration }: ConfigurationChangeEvent) => {
  if (affectsConfiguration(EXTENSION_NAME)) {
    // 生成代码片段
    await generateSnippets();

    // 提示用户重启扩展
    setTimeout(() => {
      window
        .showWarningMessage(
          'Vue Snippets: Please restart VS Code to apply snippet formatting changes',
          'Restart VS Code',
          'Ignore'
        )
        .then((action?: string) => {
          if (action === 'Restart VS Code') {
            commands.executeCommand('workbench.action.reloadWindow');
          }
        });
    }, 1000);
  }
};

export async function activate(context: ExtensionContext) {
  // 获取插件的全局状态
  const globalState = context.globalState;

  // 检查代码片段是否已经生成
  const hasGeneratedSnippets = globalState.get<boolean>('hasGeneratedVueSnippets');

  // 如果代码片段还没有生成
  if (!hasGeneratedSnippets) {
    // 生成代码片段
    await generateSnippets();

    // 设置标志，表示代码片段已经生成
    globalState.update('hasGeneratedVueSnippets', true);
  }

  // 设置配置变化的监听器
  workspace.onDidChangeConfiguration(showRestartExtensionMessage);
}

export function deactivate() {}
