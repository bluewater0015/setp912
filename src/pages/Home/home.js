//home.js
import React,{ Component } from 'react';
import Button from '../../components/Button/button';
import Title from '../../components/Title/title';
import Price from '../../components/Price/price';
import DayPrice from '../../components/DayPrice/dayPrice';
import Message from '../../components/Message/message'
import './home.css';
import '../../css/com.css';
export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			price: '128.00¥',
			yesDayPrice: '200',
			yesDay: '昨日',
			averagePrice: '190'
		}
	}
	componentDidMount(){

	}
	fetchData(){
		
	}
	render(){
		return (
			<div className="home">
				<div className="home_running">
					<div className="trade_price">
						<Title title="今日交易流水（元)" style={{ height: '18px',color: '#fff'}}/>
						<Price price={this.state.price} />
					</div>
					<div className="trade_account center" onClick={this.treadEvent.bind(this)}>
						<Button style={{width: '133px',border: '1px solid #fff',color: '#fff'}} title="交易流水明细" />
					</div>
					<div className="date_price flex">
						<DayPrice type="昨日" price={ this.state.yesDayPrice} style={{borderRight: '1px solid #fff'}}/>
						<DayPrice type="平均" price={ this.state.averagePrice} />
					</div>
				</div>
				<div className="accout_message flex" style={{paddingTop:'20px'}}>
					<Message 
						onClick={() => this.props.history.push('/billing_Report')} 
						src='./src/assets/images/account_report.png' content="账单报告"
						style={{ borderRight: '1px solid #ccc'}}
					/>
					<Message 
						onClick={() => this.props.history.push('/news_Inform')} 
						src='./src/assets/images/news.png' content="消息通知"
					/>
				</div>
			</div>
		)
	}
	treadEvent(){
		//console.log(1);
		this.props.history.push('./billitemized');
	}
}
