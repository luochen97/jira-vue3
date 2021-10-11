export function isFalsy(value: any) {
  return value === 0 ? true : !!value;
}
/*过滤空参数的公共方法*/
export function clearObject(object: any) {
  const result = { ...object };
  Object.keys(result).forEach((key: string) => {
    if (!isFalsy(result[key])) {
      delete result[key];
    }
  });
  return result;
}
