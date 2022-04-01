import requset from '../utils/request'

export function getresult(query) {
    return requset({
        url: 'src/views/check/data.json',
        method: 'get',
        params: query
    })
}