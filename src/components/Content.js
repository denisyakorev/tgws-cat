import React, {Component} from 'react'
import {connect} from 'react-redux';

class Content extends Component{
	render(){
		return (
				<div>
					<h3>Здесь будет содержание модуля: {this.props.pubStore.moduleCode}</h3>
				</div>
			)
	}
}

export default connect(
	state => ({
		pubStore: state
	}),
	dispatch => ({})
	)(Content);