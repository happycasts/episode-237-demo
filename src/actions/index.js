import axios from 'axios'
import { POSTS_URL } from '../constants/ApiConstants'
import * as types from '../constants/ActionTypes'
import { call, put } from 'redux-saga/effects'

const api = url => axios.get(url).then(res => res.data)

export const fetchPostsRequest = () => ({
  type: types.FETCH_POSTS_REQUEST
})

export function * fetchPosts () {
  const posts = yield call(api, POSTS_URL)
  yield put({ type: types.FETCH_POSTS_SUCCESS, posts })
}
