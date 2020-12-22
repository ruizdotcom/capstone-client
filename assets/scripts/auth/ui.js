const store = require('./../store')

// INIZIAL_LOAE
$(document).ready(function () {
  $('#change-password-email').hide()
  $('#sign-out-email').hide()
  $('#create-post-form').hide()
  // $('#sign-up-email').hide()
  // $('#sign-in-email').hide()
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
  $('#create-post-form').show()
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

module.exports = {
  signUpSuccessful,
  signUpFailed,
  signInSuccessful,
  signInFailed,
  signOutSuccessful,
  signOutFailed,
  changePasswordSuccessful,
  changePasswordFailed
}
