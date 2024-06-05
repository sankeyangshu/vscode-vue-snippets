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
  ModuleName: 'moduleName',
  Module: 'module',
  Alias: 'alias',
  FunctionName: 'functionName',
  ClassName: 'className',
  BaseClassName: 'baseClassName',
  TypeName: 'typeName',
  Array: 'array',
  Object: 'object',
  Item: 'item',
  Time: 'time',
  Result: 'result',
  Error: 'error',
  Expression: 'expression',
  Params: 'params',
  Data: 'data',
  Value: 'value',
  Label: 'label',
  Message: 'message',
};
