// Code Keypad Component Here
import React, {Component} from 'react'

export default class KeyPad extends Component {
    
    consolePasswordAlert = () => {
        console.log('Entering password...')
    }

    render() {
        return (<input type='password' onKeyUp={this.consolePasswordAlert} />)
    }
}