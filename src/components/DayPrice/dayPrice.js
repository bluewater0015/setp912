//dayPrice
//message.js
import React,{ Component } from 'react';
import './dayPrice.css';
export default class DayPrice extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="dayPrice flex1" style={ this.props.style }>
				<p className="center font_white">{ this.props.type || '天数' }</p>
				<p className="center font_white font_Size">{ this.props.price || '价格' }</p>
			</div>
		)
	}
}
