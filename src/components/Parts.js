import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";


class Parts extends Component{
	
	render(){
		let body='';
		let parts = [];
		if(!this.props.pubStore.module.is_category){
			let obj = JSON.parse(this.props.pubStore.module.content_json);
			parts = obj['data']['parts'];
			if(parts){
				body = (
					<section className="fdb-block">
						<div className="container">
							<table className="table table-striped table-bordered table-hover" id="projects" width="100%">
							<thead>
								<tr>
									<th width="40%">Код</th>
									<th width="40%">Номер</th>
									<th width="20%">Количество</th>
								</tr>
							</thead>
							<tbody>
							{parts.map((n,i) =>
								<tr className={i%2 === 0 ? 'even':'odd'}>
									<td>{n['info']['code']}</td>
									<td>{n['info']['partNumber']}</td>
									<td>{n['info']['quantity']}</td>
								</tr>

							)}

							<tr className="odd">
								<td></td>
								<td></td>
							</tr>
							</tbody>
                    </table>
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
	)(Parts);