import React, { Component } from 'react'

export default class ChangeCar extends Component {
    carColor = {
        img: './img/products/steel-car.jpg'
    }
    render() {
        let changeColor = (c) => {
            this.carColor.img = `./img/products/${c}-car.jpg`;
            this.setState({
                img: this.carColor.img
            });
        }
        return (
            <div className='container d-flex'>
                <div className='w-50'>
                    <img className='w-100' src={this.carColor.img}></img>
                </div>
                <div className='w-50'>
                    <button className='btn btn-danger' onClick={() => {
                        changeColor('red');
                    }}>Red</button>
                    <button className='btn btn-light' onClick={() => {
                        changeColor('silver');
                    }}>Silver</button>
                    <button className='btn btn-dark' onClick={() => {
                        changeColor('black');
                    }}>Black</button>
                </div>
            </div>
        )
    }
}
