import React, { Component } from 'react'

export default class ChangeAvatar extends Component {
    avatar = {
        img: 'https://picsum.photos/200/200'
    }
    render() {
        return (
            <div>
                <div className="card w-50">
                    <img className="card-img-top" src={this.avatar.img} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                        <button onClick={() => {
                            let newImg = 'https://picsum.photos/200/' + Math.floor(Math.random() * 100);
                            this.setState({
                                img: newImg
                            }, () => {
                                alert(this.state.img);
                            });
                        }}>Change avatar</button>
                    </div>
                </div>



            </div>
        )
    }
}
