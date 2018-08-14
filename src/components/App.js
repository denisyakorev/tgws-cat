import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import Content from './Content';
import PubTreeJQ from './PubTreeJQ';

import {connect} from 'react-redux';

class App extends Component{
	
	render(){		
		return(
			<div>
				<div className="container">
					<div className="row">
						<h2>Публикация: {this.props.pubStore.publication.name}</h2>
					</div>					
				</div>
				<div className='fdb-block'>
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-8 m-auto col-lg-10">
								<PubTreeJQ />
							</div>
							<div className="col-sm-8 col-lg-2">
								
							</div>								
						</div>
					</div>
				</div>
				<div className='fdb-block'>
					<div className="container">
						<div className="row">							
							<div className="col-sm-8">
								<Content />
							</div>
						</div>
					</div>
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
	)(App);