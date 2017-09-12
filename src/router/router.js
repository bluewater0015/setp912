//router.js
import React,{ Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import createBrowserHistory from 'history';
import Login from '../pages/Login/login';
import Home from '../pages/Home/home';
import Income from '../pages/income_Detail/income_Detail';
import Calender from '../pages/calender/calender';
import billItemiezd from '../pages/Bill_itemized/bill_itemized'
import Billing from '../pages/billing_Report/billing_Report';
import Report from '../pages/report_Detail/report_Detail';
import Inform from '../pages/news_Inform/news_Inform';
import News from '../pages/news_Detail/news_Detail';
import NoFound from '../pages/noFound/noFound'

const history = createBrowserHistory;
export default class RouterMap extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Router history={ history } >
				<div style={{ width: '100%',height: '100%'}}>
					<Route exact path="/" component={ Login } />
					<Route path="/home" component={ Home } />
					<Route path="/billitemized" component={ billItemiezd } />
					<Route path="/calender" component={ Calender } />
					<Route path="/billing_Report" component={ Billing } />
					<Route path="/income_Detail" component={ Income } />
					<Route path="/report_Detail/:id" component={ Report } />
					<Route path="/news_Inform" component={ Inform } />
					<Route path="/news_Detail/:id" component={ News } />
					<Route path="/noFound" component={ NoFound } />
				</div>
			</Router>
		)
	}
}
