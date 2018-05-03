import React, { Component } from 'react';

export default class Header extends Component {

    handleChange(element) {
        const  title = element.target.value;
        this.props.changeTitle(title);

    }
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}