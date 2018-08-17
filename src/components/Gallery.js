import React, {Component} from 'react'
import {connect} from 'react-redux'


class Gallery extends Component{
	
	render(){
		console.log('props', this.props);
		let body = '';
		if(!this.props.pubStore.module.is_category){
			let obj = JSON.parse(this.props.pubStore.module.content_json);
			let imgs = obj['data']['imgs'];
			if(imgs){
				let src	= this.props.pubStore.server_url + imgs[0]['src'];
				body = (
					<section className="fdb-block">
					    <div className="container">
					      <div className="row">
					        <div className="col-12">
					          <img className="img-fluid" src={src} />
					        </div>
					      </div>
					    </div>
					</section>
				)
			}
		}

		return(
			<div>{body}</div>
	    )
	}
}

export default connect(
	state => ({
		pubStore: state
	}),
	dispatch => ({})
	)(Gallery);