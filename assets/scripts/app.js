'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events.js')
$(() => {
  // your JS code goes here
  $('#sign-up-email').on('submit', events.onSignUpEmail)
  $('#sign-in-email').on('submit', events.onSignInEmail)
  $('#change-password-email').on('submit', events.onChangePasswordEmail)
  $('#sign-out-email').on('submit', events.onSignOutEmail)

  $('#create-post-form').on('submit', events.onCreatePost)
  $('#show-posts-form').on('submit', events.onShowPosts)
  $('#update-post-form').on('submit', events.onUpdatePost)
  $('#delete-post-form').on('submit', events.onDeletePost)
})
