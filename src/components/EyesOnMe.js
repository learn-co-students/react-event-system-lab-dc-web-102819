// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOneMe extends React.Component {
    handleFocus = () => {
        console.log("Good!")
    }

    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }
    
    render() {
        return (
            <div>
                <button
                    value="Eyes on me"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}>
                </button>
            </div>
        )
    }
}