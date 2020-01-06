// Code Keypad Component Here

import React , {Component} from 'react'

export default class KeyPad extends Component {

    keyupListener = () => {
      console.log('Entering password...')
    }

    render() {
        return (<input onKeyUp={this.keyupListener} type="password"></input>) 
    }


}
 