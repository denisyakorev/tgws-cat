import React, {Component} from 'react'
import {connect} from 'react-redux'

class ModuleInfo extends Component{
	
	render(){
		let body = ''
		try{
			body = this.props.pubStore.module.content_json['info']
		}catch(e){
			body = ''
		}

		return(
			<div>
				{body}
			</div>
	    )
	}
}

export default connect(
	state => ({
		pubStore: state
	}),
	dispatch => ({})
	)(ModuleInfo);