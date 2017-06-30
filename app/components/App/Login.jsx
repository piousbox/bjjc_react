import React from 'react'
import { FacebookLogin } from 'react-facebook-login-component'
 
class Login extends React.Component {
 
  constructor (props, context) {
    super(props, context)
  }
 
  responseFacebook (response) {
    console.log('response', response)
    localStorage.setItem('fbAccessToken', response.accessToken)
    localStorage.setItem('fbEmail', response.email)
    localStorage.setItem('fbId', response.id)
    localStorage.setItem('fbName', response.name)    
  }
  
  render () {
    return (
      <div>
        <FacebookLogin socialId="107960979836752"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook" />
      </div>
    )
  }
 
}
 
export default Login
