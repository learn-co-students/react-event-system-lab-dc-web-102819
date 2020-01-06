import React, {Component} from 'react'

class EyesOnMe extends Component{
  iGainFocus = () => {
    console.log('Good!')
  }
  iAmBlur = () => {
    console.log('Hey! Eyes on me!')
  }
  render(){
    return(
      <button onFocus={this.iGainFocus} onBlur={this.iAmBlur}>Send</button>
    )
  }
}
export default EyesOnMe
