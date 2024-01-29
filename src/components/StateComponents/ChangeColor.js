import React, { Component } from 'react';

export default class extends Component {
    state = {
        color: 'red'
    }

    render() {
        console.log(this.state)
        const { color } = this.state;
        return (
            <div className='container'>
                <i className="fa fa-house" style={{
                    color: color,
                    fontSize: '100px',
                }} />
                <p style={{
                    color: color,
                    fontSize: '100px',
                }} >Hello</p>
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        color: 'red'
                    });
                }}>Change color to red</button>
                <button className='btn btn-danger' onClick={() => {
                    this.setState({ color: 'green' })

                }}>Change color to green</button>
            </div>
        )
    }
}