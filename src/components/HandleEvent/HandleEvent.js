import React, { Component } from 'react'

export default class HandleEvent extends Component {
    sayHello = (n = 'con cho') => {
        alert('Hello ' + n);
    }
    render() {
        return (
            <div className='container'>
                <button className='btn btn-success' onClick={() => this.sayHello()}>CL!CK ME</button>
                <button className='btn btn-success' onClick={() => {
                    let promptA = prompt('Nhập tên của bạn');
                    this.sayHello(promptA);
                }}>CL!CK ME</button>
                <input placeholder='name' onInput={(e) => {
                    console.log(e.target.value);
                }}></input>
            </div>
        )
    }
}
