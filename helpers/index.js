import axios from 'axios'

export function allPosts() {
  return axios.get(process.env.apiUrl)
}

export function getPost({ slug }) {
  return axios.get(`${process.env.apiUrl}/${slug}`)
}
