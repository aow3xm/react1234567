import React, { Component } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

export default class HomeLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='d-flex justify-content-space-between'>
                    <Navigation />
                    <Content />

                </div>
                <Footer />
            </div>
        )
    }
}
