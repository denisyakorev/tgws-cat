import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


import PubTree from './PubTree'
import Content from './Content'

function App(){

	return(
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
					<PubTree />
				</div>
				<div className="col-sm-8">
					<Content />			
				</div>
			</div>
		</div>
		)
}

export default App