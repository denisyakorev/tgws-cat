import React, {Component} from 'react'
import ModuleInfo from './ModuleInfo';
import Gallery from './Gallery';
import Parts from './Parts';

import {connect} from 'react-redux';

class ModuleBody extends Component{
	
	render(){
		return(
			<section className="fdb-box fdb-touch">
				<ModuleInfo />
				<Gallery />
				<Parts />
			</section>
	    )
	}
}

export default connect(
	state => ({
		pubStore: state
	}),
	dispatch => ({})
	)(ModuleBody);