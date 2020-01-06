// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {
    let focusCallback = () => (console.log('Good!'))
    let blurCallback = () => (console.log('Hey! Eyes on me!'))
    
    let myBtn = <button onFocus={focusCallback} onBlur={blurCallback} />
    
    return myBtn
}

export default EyesOnMe