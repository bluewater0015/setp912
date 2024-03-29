//'message_Inform.js
import React,{ Component } from 'react';
import './news_Inform.css';
import informList from '../../services/AppServices'
import 'whatwg-fetch'

export default class Inform extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:[{
				id: 1,
				title:"机器警报",
				content:'机器离线',
				time:'2017-09-01 23:00',
				isRead: true
			},{
				id: 2,
				title:"机器警报2",
				content:'机器离线2',
				time:'2016-09-01 23:00',
				isRead:false
			}]
		}
	}
	componentDidMount(){
		// fetch('https://stage.starcandy.cn/api/vod/song/suggest',
		// 	method:'GET',
		// 	headers:{'Content-type':'application/json'},
		// 	body:{conversationId:1}
		// 	)
		// .then((res) => {
		// 	console.log(res)
		// }).catch((err) => {
		// 	console.log(err)
		// })


		informList('/api/vod/song/suggest',{conversationId:1}).then(res => {
			return res.json()
		}).then(data =>{
			console.log('nes_Inform',data);
			if(data.length){
				// this.setState({
				// 	list: res.data.list
				// })
			}
		})
	}
	itemEvent(index){
		//alert(index);
		let id = this.state.list[index].id;
		//console.log(!this.state.list[index].isRead);
		//alert(id);
		this.props.history.push(`/news_Detail/:${id}`);
		this.setState({
			isRead: !this.state.list[index].isRead
		})
		//console.log('isRead',isRead);
	}
	render(){
		return (
			<div className="news_Inform">
				{
					this.state.list.map((item,index) => {
						return(
							<div className="inform marginTop" key={index}>
								<div className="triangle_up" style={{ borderBottomColor : item.isRead ? '#FEE300': '#57D5E7' }}>
									<p className="isRead justify-content">{item.isRead ? '已读' : "未读"}</p>
								</div>
								<div className="inform_list" onClick={()=>{this.itemEvent(index)}}>
									<p className="machine_alarm  border_bottom">{item.title}</p>
									<p className="marginTop">
										<span>警报时间：</span>
										<span>{ item.time }</span>
									</p>
									<p className="marginTop">
										<span>警报内容：</span>
										<span>{ item.content }</span>
									</p>
								</div>
							</div>
						) 
					})
				}
				
			</div>
		)
	}
}