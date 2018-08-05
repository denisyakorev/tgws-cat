import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


import PubTreeJQ from './PubTreeJQ'
import Content from './Content'

function App(pub_data){

	return(
		<div className='fdb-block'>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8 m-auto col-lg-4">
						<PubTreeJQ pub_data={pub_data}/>
					</div>
					<div className="col-sm-8">
						<Content />
					</div>
				</div>
			</div>
		</div>
		)
}

export default App