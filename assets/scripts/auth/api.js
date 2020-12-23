const config = require('./../config')
const store = require('../store')

const signUpData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signInData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePasswordData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const signOutData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE',
    data: data
  })
}

// CRUD ----------------------------------
const createPostData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

const showPostsData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

const updatePostData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts/' + data.post.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const deletePostData = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts/' + data.post.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  signUpData,
  signInData,
  changePasswordData,
  signOutData,
  createPostData,
  showPostsData,
  updatePostData,
  deletePostData
}
