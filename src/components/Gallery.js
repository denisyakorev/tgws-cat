import React, {Component} from 'react'
import {connect} from 'react-redux'


class Gallery extends Component{
	
	render(){
		let body = '';
		let icons_srcs = [];
		let imgs= [];
		if(!this.props.pubStore.module.is_category){
			let obj = JSON.parse(this.props.pubStore.module.content_json);
			imgs = obj['data']['imgs'];
			if(imgs){

				for (var i=0; i < imgs.length; i++) {
					icons_srcs.push(this.props.pubStore.server_url + imgs[i]['src']);
                }

				let main_img_src= this.props.pubStore.server_url + imgs[0]['src'];
				body = (
					<section className="fdb-block">
					    <div className="container">
					      <div className="row">
					        <div className="col-12">
					          <img alt= "main img" className="img-fluid" src={main_img_src} />
					        </div>
					      </div>
					    </div>
					</section>
				)

				}

			}

		return(
			<div>
				<div>{body}</div>
				<div className="row pt-4">
					{icons_srcs.map((n, i) =>
						<div key={i} className="col-6 col-md-3">
							<img key={i} alt="icon img" className="img-fluid" src={n} />
						</div>
						)}
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