import React, {Component} from 'react'
import {connect} from 'react-redux'

class ModuleInfo extends Component{
	
	render(){
		let body = ''
		if(this.props.pubStore.module.is_category && this.props.pubStore.module.title !== ''){
			body = (
					<section className="fdb-box fdb-touch">
	                <div className="container">
	                    <div className="row">
	                        <div className="col text-center">
	                            <h2>{this.props.pubStore.module.title}</h2>
	                        </div>                                                
	                    </div>	                                       
	                </div>
	       		 </section>
				)

		}else if(!this.props.pubStore.module.is_category){
			let obj = JSON.parse(this.props.pubStore.module.content_json);
			let info = obj['info'];
			body = (
				<section className="fdb-box fdb-touch">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>{this.props.pubStore.module.title}</h2>
                        </div>                                                
                    </div>
                    <div className="row">
					<p>
						<strong>Релиз номер:</strong>{info.issueNumber}<br />
						<strong>Дата релиза:</strong>{info.issueDate}<br />
					</p>
				</div>	                    
                </div>
       		 </section>
			)
		}else{
			body = '';
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
	)(ModuleInfo);