import { Placeholders, SnippetPlaceholders } from '../types';

/**
 * 格式化代码片段占位符
 * @param {string} snippet 代码片段
 * @return 格式化后的代码片段
 */
export const formatSnippetPlaceholders = (snippet: string) => {
  return String(snippet)
    .replace(new RegExp(Placeholders.FileName, 'g'), SnippetPlaceholders.FileName)
    .replace(new RegExp(Placeholders.FirstTab, 'g'), SnippetPlaceholders.FirstTab)
    .replace(new RegExp(Placeholders.SecondTab, 'g'), SnippetPlaceholders.SecondTab)
    .replace(new RegExp(Placeholders.ThirdTab, 'g'), SnippetPlaceholders.ThirdTab)
    .replace(new RegExp(Placeholders.FourthTab, 'g'), SnippetPlaceholders.FourthTab)
    .replace(new RegExp(Placeholders.FifthTab, 'g'), SnippetPlaceholders.FifthTab)
    .replace(new RegExp(Placeholders.SixthTab, 'g'), SnippetPlaceholders.SixthTab)
    .replace(new RegExp(Placeholders.FirstCapitalize, 'g'), SnippetPlaceholders.FirstCapitalize)
    .replace(new RegExp(Placeholders.SecondCapitalize, 'g'), SnippetPlaceholders.SecondCapitalize)
    .replace(new RegExp(Placeholders.ThirdCapitalize, 'g'), SnippetPlaceholders.ThirdCapitalize);
};
