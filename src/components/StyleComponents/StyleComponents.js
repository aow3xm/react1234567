import React, { Component } from 'react'
import style from './StyleComponents.module.css'
export default class StyleComponents extends Component {
  render() {
    return (
      <div className={`text-center ${style["text-red  "]}`}>StyleComponents</div>
    )
  }
}
