import request from '@/util/request'
/* eslint-disable */
export function ping() {
  return request({
    url: '/api/ping',
    method: 'get'
  })
}
