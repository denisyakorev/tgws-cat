import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ResizeSensor from 'resize-sensor/ResizeSensor'


import Content from './Content';
import PubTreeJQ from './PubTreeJQ';

import {connect} from 'react-redux';
import $ from "jquery";

class App extends Component{
    moveBlock(){
        let tree_block = $("#tree-container");
        let content_block = $("#moduleBody");
        let content_height = content_block.height();
        let tree_height = tree_block.height();

        if(content_height > tree_height && content_height > 160){
            let margin = -(content_height) / 2;
            tree_block.css('margin-top', margin);
            content_block.css('margin-top', 0);
        }else if(tree_height > 165 && content_height > 165){
            let margin = -(tree_height) / 2;
            content_block.css('margin-top', margin);
            tree_block.css('margin-top', 0);
        }
    }
	
	render(){		
		return(
			<div className="container-fluid" >
                <div className='fdb-block' style={{padding: '10px 0'}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col col-md-8 text-center">
                                <h2>{this.props.pubStore.publication.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
				<div className='fdb-block'>
					<div className="container-fluid">
						<div className="row" >
							<div className="col-12 col-md-12 cols-sm-12 m-auto col-lg-4">
								<PubTreeJQ />
							</div>
							<div className="col-sm-12 col-12 col-md-12 m-auto col-lg-8">
								<Content />
							</div>								
						</div>
					</div>
				</div>				
			</div>
		)

	}


	 componentDidMount(){
        this.moveBlock();
        let tree = document.getElementById('tree-container');
        new ResizeSensor(tree, this.moveBlock);
        let content = document.getElementById('moduleBody');
        new ResizeSensor(content, this.moveBlock);
     }

}

export default connect(
	state => ({
		pubStore: state
	}),
	dispatch => ({})
	)(App);