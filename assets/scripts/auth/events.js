const getformfields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUpEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.signUpData(data)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailed)
}

const onSignInEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.signInData(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailed)
}

const onChangePasswordEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.changePasswordData(data)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailed)
}

const onSignOutEmail = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.signOutData(data)
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailed)
}

// CRUD ------------------------------------

const onCreatePost = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.createPostData(data)
    .then(ui.createPostSuccessful)
    .catch(ui.createPostFailed)
}

const onShowPosts = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.showPostsData(data)
    .then(ui.showPostsSuccessful)
    .catch(ui.showPostsFailed)
}

const onUpdatePost = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.updatePostData(data)
    .then(ui.updatePostSuccessful)
    .catch(ui.updatePostFailed)
}

const onDeletePost = event => {
  event.preventDefault()
  const form = event.target

  const data = getformfields(form)

  api.deletePostData(data)
    .then(ui.deletePostSuccessful)
    .catch(ui.deletePostFailed)
}

module.exports = {
  onSignUpEmail,
  onSignInEmail,
  onChangePasswordEmail,
  onSignOutEmail,
  onCreatePost,
  onShowPosts,
  onUpdatePost,
  onDeletePost
}
