const store = require('./../store')

// INIZIAL_LOAE
$(document).ready(function () {
  $('#change-password-email').hide()
  $('#sign-out-email').hide()

  $('#profile-form').hide()

  $('#create-post-form').hide()
  $('#show-posts-form').hide()
  $('#update-post-form').hide()
  $('#delete-post-form').hide()

  $('#create-mb').hide()
  $('#show-mb').hide()
  $('#update-mb').hide()
  $('#delete-mb').hide()

  $('#sign-up-email').hide()
  $('#sign-in-email').hide()
})

$('#sign-up-lb').click(function () {
  $('#sign-up-email').show()
  $('#content').hide()
})
$('#sign-in-lb').click(function () {
  $('#sign-in-email').show()
  $('#content').hide()
})

// CRUD BUTTONS ----------------------------------

$('#create-mb').click(function () {
  $('#create-post-form').show()
  $('#content').hide()
})
$('#show-mb').click(function () {
  $('#show-posts-form').show()
  $('#content').hide()
})
$('#update-mb').click(function () {
  $('#update-post-form').show()
  $('#content').hide()
})
$('#delete-mb').click(function () {
  $('#delete-post-form').show()
  $('#content').hide()
})

$('#change-password-mb').click(function () {
  $('#change-password-email').show()
  $('#content').hide()
})
$('#sign-out-mb').click(function () {
  $('#sign-out-email').show()
  $('#content').hide()
})

// SIGN_UP
const signUpSuccessful = function (response) {
  $('#message').text('Congradulations ' + response.user.email + '! You have signed up successfully')
}
const signUpFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// SIGN_IN
const signInSuccessful = function (response) {
  $('#message').text('Here is your token: ' + response.user.token)
  store.user = response.user
  $('#landing').hide()
  $('#sign-up-email').hide()
  $('#sign-in-email').hide()

  $('#change-password-mb').show()
  $('#sign-out-mb').show()

  $('#profile-form').show()

  $('#create-mb').show()
  $('#show-mb').show()
  $('#update-mb').show()
  $('#delete-mb').show()

  // $('#create-post-form').show()
  // $('#show-posts-form').show()
  // $('#update-post-form').show()
  // $('#delete-post-form').show()
}
const signInFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// SIGN_OUT
const signOutSuccessful = function (response) {
  $('#message').text('You have signed out successfully')
  store.user = null
}
const signOutFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// CHANGE_PASSWORD
const changePasswordSuccessful = function (response) {
  $('#message').text('You have successfully changed your password')
}
const changePasswordFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// CRUD ------------------------------------------------------------------------

// CREATE
const createPostSuccessful = function (response) {
  $('#message').text('You have successfully created a post!')
  $('form').trigger('reset')
}
const createPostFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// SHOW
const showPostsSuccessful = function (response) {
  $('#post-list').html(' ')
  $('#message').text('You have showed a post!')
  const allPosts = response.posts
  allPosts.forEach(post => {
    $('#post-list').append(`<li>${post.title}</li>`)
    $('#post-list').append(`<li>${post.post}</li>`)
    $('#post-list').append(`<li>${post.caption}</li>`)
    $('#post-list').append(`<li>${post._id}</li>`)
  })
  $('#posts-index').show()
  $('form').trigger('reset')
}
const showPostsFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// UPDATE
const updatePostSuccessful = function (response) {
  $('#message').text('You have successfully updated a Post!')
  $('form').trigger('reset')
}
const updatePostFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

// DELETE
const deletePostSuccessful = function (response) {
  $('#message').text('You have successfully deleted a Post!')
  $('form').trigger('reset')
}
const deletePostFailed = function () {
  $('#message').text('Uh oh! It looks like something went wrong, please try again!')
}

module.exports = {
  signUpSuccessful,
  signUpFailed,
  signInSuccessful,
  signInFailed,
  signOutSuccessful,
  signOutFailed,
  changePasswordSuccessful,
  changePasswordFailed,
  createPostSuccessful,
  createPostFailed,
  showPostsSuccessful,
  showPostsFailed,
  updatePostSuccessful,
  updatePostFailed,
  deletePostSuccessful,
  deletePostFailed
}
