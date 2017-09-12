//input.js
import React,{ Component } from 'react';
import './input.css';
export default class Input extends Component{
	constructor(props){
		super(props);
	}
	dealInputData(e){
		//console.log(e.target.value);
		let value = e.target.value;
		this.props.onChange && this.props.onChange(value);
	}
	render(){
		return (
			<div className="input space_around">
				<input 
					onChange={(e)=>this.dealInputData(e)} 
					style={this.props.style} className="input_value" type="text" 
					placeholder={ this.props.value } 
				/>
			</div>
		)
	}
}