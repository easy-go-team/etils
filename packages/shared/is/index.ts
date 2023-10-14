const toString = Object.prototype.toString;

/**
 * @description: 判断是否是浏览器环境
 */
export const isClient = typeof window !== 'undefined';
/**
 * @description: 判断变量是否定义
 * @param val
 */
export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined';

/**
 * @description: 判断变量类型是否为boolean
 * @param val
 */
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';

/**
 * @description: 判断变量类型是否为函数
 * @param val
 */
export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function';

/**
 * @description: 判断变量类型是否为数字
 * @param val
 */
export const isNumber = (val: any): val is number => typeof val === 'number';

/**
 * @description: 判断变量类型是否为字符串
 * @param val
 */
export const isString = (val: unknown): val is string => typeof val === 'string';

/**
 * @description: 判断变量类型是否为对象
 * @param val
 */
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]';

/**
 * @description: 判断变量类型是否为Window对象
 * @param val
 */
export const isWindow = (val: any): val is Window => typeof window !== 'undefined' && toString.call(val) === '[object Window]';

/**
 * @description: 判断是否是IOS
 */
export const isIOS = /* #__PURE__ */ isClient && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);

/**
 * @description: 判断对象是否有某个属性
 * @param val 对象
 * @param key 属性
 */
export const hasOwn = <T extends object, K extends keyof T>(val: T, key: K): key is K => Object.prototype.hasOwnProperty.call(val, key);

/**
 * @description: 判断是否是数组
 * @param val
 */
export const isArray = (val: any) => Array.isArray(val);

/**
 * @description: 判断是否是为IE
 */
export const isIE = () => {
  return !!((window as any).ActiveXObject || 'ActiveXObject' in window);
};
