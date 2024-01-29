//class component
import React, { Component } from "react";
import ReactDOM from "react-dom";

export class Alert extends React.Component {
    // phương thức trả về nội dung của component
    render() {
        return <div className="alert alert-success" role="alert">
            <strong>Well done!</strong> You successfully read this important alert message.
        </div>;
    }
}