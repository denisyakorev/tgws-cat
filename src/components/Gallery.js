import React, {Component} from 'react'
import {connect} from 'react-redux'


class Gallery extends Component{
	
	render(){
		console.log('props', this.props);
		let body = '';
		let galleryIcons = '';
		let imgs= [];
		if(!this.props.pubStore.module.is_category){
			let obj = JSON.parse(this.props.pubStore.module.content_json);
			imgs = obj['data']['imgs'];
			if(imgs){

				for (var i=0; i < imgs.length; i++){
					galleryIcons += (
						<div className="col-6 col-md-3">
						  <img alt="image" className="img-fluid" src={this.props.pubStore.server_url + imgs[i]['src']} />
						</div>
					)

				let main_img_src= this.props.pubStore.server_url + imgs[0]['src'];
				body = (
					<section className="fdb-block">
					    <div className="container">
					      <div className="row">
					        <div className="col-12">
					          <img className="img-fluid" src={main_img_src} />
					        </div>
					      </div>
					    </div>
					</section>
				)

				}

			}
		}
		console.log(galleryIcons);
		return(
			<div>
				<div>{body}</div>
				<div className="row pt-4">
					{imgs.map(n, i) => (<div className="col-6 col-md-3"><img key={i} alt="image" className="img-fluid" src={this.props.pubStore.server_url + imgs[i]['src']} /></div>)}
				</div>
			</div>
	    )
	}
}

export default connect(
	state => ({
		pubStore: state
	}),
	dispatch => ({})
	)(Gallery);