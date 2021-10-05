import request from '@/utils/request'
import qs from "qs";

// 注册
export const reg = data=> {
	return request({
		method: 'post',
		url: '/api/reguser',
		data:qs.stringify(data)
	})
}
// 登录
export const login = (data) => {
	return request({
		method: 'post',
		url: '/api/login',
		data:qs.stringify(data)
	})
}
