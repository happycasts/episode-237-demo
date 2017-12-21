import axios from 'axios'
import { POSTS_URL } from '../constants/ApiConstants'
import * as types from '../constants/ActionTypes'

export const fetchPostsRequest = () => ({
  type: types.FETCH_POSTS_REQUEST
})

export const fetchPosts = () => {
  console.log('fetchPosts...这里来执行异步操作')
}
