
// 获取地址参数
export const getUrlParam = (key: string) => {
    const query = window.location.search[0] === '?' ? window.location.search.slice(1) : location.search
    const map = query.split('&').reduce((data, key) => {
        const arr = key.split('=')
        // @ts-ignore
        data[arr[0]] = arr[1]
        return data
    }, {})
    // @ts-ignore
    return map[key]
} 