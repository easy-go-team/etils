import { isArray, isBoolean, isDef, isObject, isString } from '@etils/shared';

/**
 * @description: getSession 获取sessionStorage key值
 * @param key sessionStorage key
 * @param val 默认值
 */
export const getSession = (key: string, val?: any) => {
  const v = window.sessionStorage.getItem(key);
  if (v == null) {
    return val || '';
  }
  try {
    if (isString(v)) {
      const w = JSON.parse(v);
      if (isObject(w) || isBoolean(w)) {
        return w;
      }
      return v || '';
    }
  } catch (e) {
    return v || '';
  }
};

/**
 * @description: setSession 设置sessionStorage key值
 * @param key sessionStorage key
 * @param data sessionStorage value
 */
export const setSession = (key: string, data: any) => {
  if (typeof data === 'object') {
    sessionStorage.setItem(key, JSON.stringify(data));
  } else {
    sessionStorage.setItem(key, data);
  }
  return data;
};

/**
 * @description: rmSession 删除sessionStorage key值
 * @param keys
 */
export const rmSession = (keys?: string[]) => {
  if (!keys || keys.length === 0) {
    window.sessionStorage.clear();
  } else {
    for (let i = 0; i < keys.length; i++) {
      window.sessionStorage.removeItem(keys[i]);
    }
  }
};

/**
 * @description: setLocal 设置localStorage key值
 * @param key localStorage key
 * @param data localStorage value
 * @param source
 */
export const setLocal = (key: string, data: any, source?: any) => {
  let params = source || {};
  if (isObject(data)) {
    if (isArray(data)) {
      // 数组全覆盖
      params = data;
    } else {
      if (!isDef(source)) {
        params = {};
      }
      // 对象增量覆盖
      for (const key in data) {
        // @ts-ignore
        params[key] = data[key];
      }
    }
    window.localStorage.setItem(key, JSON.stringify(params));
  } else {
    params = data;
    window.localStorage.setItem(key, params);
  }
  return params;
};

/**
 * @description: getLocal 获取localStorage key值
 * @param key localStorage key
 * @param val 默认值
 */
export const getLocal = (key: string, val?: any) => {
  const v = window.localStorage.getItem(key);
  let w = '';
  if (v == null) {
    return val || '';
  }
  if (isString(v)) {
    try {
      w = JSON.parse(v);
      if (isObject(w) || isBoolean(w)) {
        return w;
      }
      return v || '';
    } catch (e) {
      return v || '';
    }
  }
};

/**
 * @description: rmLocal 删除localStorage key值
 */
export const rmLocal = (keys?: string[]) => {
  if (!keys || keys.length === 0) {
    window.localStorage.clear();
  } else {
    for (let i = 0; i < keys.length; i++) {
      window.localStorage.removeItem(keys[i]);
    }
  }
};
