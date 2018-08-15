import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import Content from './Content';
import PubTreeJQ from './PubTreeJQ';

import {connect} from 'react-redux';

class App extends Component{
	
	render(){		
		return(
			<div>
                <div className='fdb-block' style={{padding: '10px 0'}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col col-md-8 text-center">
                                <h1>{this.props.pubStore.publication.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
				<div className='fdb-block'>
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-8 m-auto col-lg-5">
								<PubTreeJQ />
							</div>
							<div className="col-sm-8 col-lg-7">
								<Content />
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