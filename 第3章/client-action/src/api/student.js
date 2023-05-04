import axios from '@/utils/request'

export function all() {
  return axios({
    url: '/students',
    method: 'get'
  })
}

export function deleteById(id) {
  return axios({
    url: `/students/${id}`,
    method: 'delete'
  })
}

export function update(id, dto) {
  return axios({
    url: `/students/${id}`,
    method: 'put',
    data: dto
  })
}

export function insert(dto) {
  return axios({
    url: `/students`,
    method: 'post',
    data: dto
  })
}