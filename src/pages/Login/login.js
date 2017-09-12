//login.js
import React,{ Component } from 'react';
//import HomeButton from '../../components/HomeButton/homebutton';
//import Header from "../../components/Header/header";
import Button from '../../components/Button/button';
import Input from '../../components/Input/input';
import Title from '../../components/Title/title';
import "./login.css";

/**
* 只有page才能放置多个elements。page在原则上负责处理逻辑。也就是所谓的智能组件。
* components在原则上，是为了复用，所以一般只嵌套一个element，components在原则上只负责展示功能。
* 也就是所谓的木偶组件，你给我什么，我展示什么。
* 所以，components处理的东西，一般是通过page上传递下来的props来实现。
*/

//特殊技巧：为了防止报错，在componets中多使用 && 和 ||.

//实例 this.props.router && this.props.router.push()
// <Button title = '确定'></Button>
// <button>{{this.props.title || '确定'}}</button>

//布局：分模块
//page:结构性的东西。
//components:单一的，仅仅用于展示的东西

//存在的问题
// 1.在组件中添加点击事件无效 是为何？
// 比如这样：<Button title="登录" onClick={this.loginEvent.bind(this)}/>
export default class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			phoneNumber:'',
			password:''
		}
	}
	getPhoneEvent(value){
		console.log('phone',value);
		this.setState({
			phoneNumber: value
		})
	}
	getPasswordEvent(value){
		console.log('psss',value);
		this.setState({
			password: value
		})
	}
	loginEvent(){
		
		const login = () => {
			// login(this.props.phoneNumber,this.props.password).then(res => {
			// 	this.props.history.push('/home')
			// }).catch(err => {
			// 	console.log(err);
			// })
			this.props.history.push('/home')
		}
		if(this.state.phoneNumber && this.state.password){
			login();
		}else{
			console.log('请填写正确的电话号和密码')
			return 
		}
		
		
	}
	render(){
		return (
			<div className="login_container">
				<div className="alliance_business center">
					<Title title="加盟商管家" />
				</div>
				<div className="login_input">
					<div className='baseHeight flex align_items borderRadius bgColorMain border borderColorWhite'>
						<img 
							src='/src/assets/images/phone.png' 
							className='icons marginLeft' 
						/>
						<Input 
							onChange={(value)=>{this.getPhoneEvent(value)}} 
							value="请输入手机" 
							style={{marginLeft: '10px',backgroundColor:'#FAD51B',color:'#FFF'}} 
						/>
					</div>
					<div className='baseHeight flex align_items borderRadius bgColorMain border borderColorWhite'>
						<img 
							src='/src/assets/images/password.png' 
							className='icons marginLeft' 
						/>
						<Input
							onChange={(value)=>{this.getPasswordEvent(value)}} 
							value="请输入密码" 
							style={{marginLeft: '10px',backgroundColor:'#FAD51B',color:'#FFF'}} 
						/>
					</div>
				
				</div>
				<div className="login_btn center">
					<Button style={{width:'150px',height:'30px',backgroundColor: '#fff'}} title="登录" onClick={this.loginEvent.bind(this)}/>
				</div>
			</div>
		)
	}
}