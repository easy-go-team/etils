import {describe, expect, it} from 'vitest';

import {isClient, isDef, isArray, isIE, isIOS, isFunction, isNumber, isObject, isString, isWindow, isBoolean} from './index'

describe('is单元测试', () => {
    it('测试isClient方法', () => {
        expect(isClient).toBe(true);
    })
    it('测试isDef方法', () => {
        expect(isDef()).toBe(false);
        expect(isDef(undefined)).toBe(false);
        expect(isDef(null)).toBe(true);
        expect(isDef(0)).toBe(true);
        expect(isDef('')).toBe(true);
        expect(isDef(false)).toBe(true);
    })
    it('测试isBoolean方法', () => {
        expect(isBoolean(undefined)).toBe(false);
        expect(isBoolean(null)).toBe(false);
        expect(isBoolean(0)).toBe(false);
        expect(isBoolean('')).toBe(false);
        expect(isBoolean(false)).toBe(true);
    })
    it('测试isFunction方法', () => {
        expect(isFunction(undefined)).toBe(false);
        expect(isFunction(null)).toBe(false);
        expect(isFunction(0)).toBe(false);
        expect(isFunction('')).toBe(false);
        expect(isFunction(false)).toBe(false);
        expect(isFunction(() => {})).toBe(true);
    })
    it('测试isNumber方法', () => {
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(0)).toBe(true);
        expect(isNumber('')).toBe(false);
        expect(isNumber(false)).toBe(false);
        expect(isNumber(() => {})).toBe(false);
    })
    it('测试isString方法', () => {
        expect(isString(undefined)).toBe(false);
        expect(isString(null)).toBe(false);
        expect(isString(0)).toBe(false);
        expect(isString('')).toBe(true);
        expect(isString(false)).toBe(false);
        expect(isString(() => {})).toBe(false);
    })
    it('测试isObject方法', () => {
        expect(isObject(undefined)).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject(0)).toBe(false);
        expect(isObject('')).toBe(false);
        expect(isObject(false)).toBe(false);
        expect(isObject(() => {})).toBe(false);
        expect(isObject({})).toBe(true);
    })
    it('测试isWindow方法', () => {
        expect(isWindow(undefined)).toBe(false);
        expect(isWindow(null)).toBe(false);
        expect(isWindow(0)).toBe(false);
        expect(isWindow('')).toBe(false);
        expect(isWindow(false)).toBe(false);
        expect(isWindow(() => {})).toBe(false);
        expect(isWindow({})).toBe(false);
    })
    it('测试isIOS方法', () => {
        expect(isIOS).toBe(false);
    })
    it('测试isArray方法', () => {
        expect(isArray(undefined)).toBe(false);
        expect(isArray(null)).toBe(false);
        expect(isArray(0)).toBe(false);
        expect(isArray('')).toBe(false);
        expect(isArray(false)).toBe(false);
        expect(isArray(() => {})).toBe(false);
        expect(isArray({})).toBe(false);
        expect(isArray(window)).toBe(false);
        expect(isArray([])).toBe(true);
    })
    it('测试isIE方法', () => {
        expect(isIE()).toBe(false);
    })
})