//homebutton.js
import React,{ Component } from 'react';
import './homebutton.css';
import createBrowserHistory from 'history';
//const history = createBrowserHistory;

export default class HomeButton extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="homebutton" >
				<div className="login center" onClick={() => this.clickEvent()}>
					<div className="btn center" style={this.props.style}>{this.props.title || '登录'}</div>
				</div>
			</div>
		)
	}
	//点击登录
	clickEvent(){
		//console.log(path);
		this.props.router && this.props.path && this.props.router.push(this.props.path)
		//this.props.history.push('/home');
	}
}