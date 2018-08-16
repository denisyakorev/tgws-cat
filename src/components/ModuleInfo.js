import React, {Component} from 'react'
import {connect} from 'react-redux'

class ModuleInfo extends Component{
	
	render(){
		let body = ''
		try{
			let obj = JSON.parse(this.props.pubStore.module.content_json);
			let info = obj['info'];
			body = (
				<div>

				</div>
			)

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