import React, { Component } from 'react'

export default class StateComponents extends Component {
    stateA = {
        fSize: 15
    }
    render() {
        return (
            <div className='container'>
                <div>
                    <p style={{ fontSize: `${this.stateA.fSize}px`, background: 'red' }}>Hello</p>
                    <button onClick={() => {
                        this.setState({
                            fSize: this.stateA.fSize += 100

                        })
                    }}>Increase Font Size</button>
                </div>
            </div>
        )
    }
}
