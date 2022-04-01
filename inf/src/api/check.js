import request from '@/utils/request'

export function postCheckList(data) {
    return request({
        // url: '/vue-admin-template/check/form',  //ssm搭建的项目提供的接口，对外暴露的controller
        url: 'https://api.vvhan.com/api/xh',
        method: 'get',
        data
    })
}
