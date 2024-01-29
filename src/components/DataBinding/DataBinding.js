import React, { Component } from 'react'
export default class DataBinding extends Component {
    nameT = 'Cybersoft';
    renderDesc = () => {
        return <div>Sắp nghỉ tết rồi các bạn oi</div>
    }
    product = {
        id: 1,
        name: 'Iphone',
        price: 1000,
        img: 'https://picsum.photos/200/200'
    };
    render() {
        let title = 'Cybersoft';
        return (
            //   <div>DataBinding</div>
            <div className='container'>
                <p className='text-center '>{title}, {this.nameT}</p>
                <p>{this.renderDesc()}</p>
                <div className="card w-50 h-50">
                    <img className="card-img-top" src={this.product.img} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{this.product.name}</h4>
                        <p className="card-text">{this.product.price}</p>
                    </div>
                </div>


            </div>
        )
    }
}
