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

module.exports = {
  onSignUpEmail,
  onSignInEmail,
  onChangePasswordEmail,
  onSignOutEmail
}
