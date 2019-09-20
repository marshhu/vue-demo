import request from '@/util/request'
/* eslint-disable */
export function uploadSingle() {
  return request({
    url: '/api/uploadSingle',
    method: 'post'
  })
}

export function uploadMulti() {
    return request({
      url: '/api/uploadMulti',
      method: 'post'
    })
  }
