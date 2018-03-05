import React,{ Component } from "react";
import { Link } from "react-router";
import { Button, Icon } from 'antd'
export default class App extends Component{
	render(){
		let childs = React.Children.toArray(this.props.children);

		return(
			<div>
				<h1>App</h1>
				<ul>
					<li><Link to="/welcome" activeClassName = "active">Welcome</Link></li>
					<li><Link to="/counter" activeClassName = "active">Counter</Link></li>
				</ul>
				<Button type="primary">点击</Button>
				<Icon type="question" style={{ fontSize: 16, color: '#08c' }} />
				{ childs }
			</div>
		)
	}
}

