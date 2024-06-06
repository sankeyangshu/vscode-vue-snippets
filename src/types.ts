/**
 * 代码片段类型
 */
export interface SnippetType<T> {
  key: keyof T;
  prefix: T[keyof T];
  body: string[];
  description?: string;
}

/**
 * 占位符
 */
export const Placeholders = {
  FirstTab: 'first',
  SecondTab: 'second',
  ThirdTab: 'third',
  FourthTab: 'fourth',
  FifthTab: 'fifth',
  SixthTab: 'sixth',
  FileName: 'file',
  FirstCapitalize: 'first',
  SecondCapitalize: 'second',
  ThirdCapitalize: 'third',
};

/**
 * 生成代码片段可识别的占位符
 */
export const SnippetPlaceholders = {
  FirstTab: '${1:first}',
  SecondTab: '${2:second}',
  ThirdTab: '${3:third}',
  FourthTab: '${4:fourth}',
  FifthTab: '${5:fifth}',
  SixthTab: '${6:sixth}',
  FileName: '${1:${TM_FILENAME_BASE}}',
  FirstCapitalize: '${1/(.*)/${1:/capitalize}/}',
  SecondCapitalize: '${2/(.*)/${2:/capitalize}/}',
  ThirdCapitalize: '${3/(.*)/${3:/capitalize}/}',
};
