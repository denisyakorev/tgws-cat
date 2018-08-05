import 'rc-tree/assets/index.css';
import React from 'react';
import $ from 'jquery'
import 'vakata-jstree/dist/jstree.js'



class PubTreeJQ extends React.Component{

    componentDidMount(){
        $('#tree-holder').jstree(this.props.pub_data.pub_data.content_json);
        console.log('finish');
    }


    render() {
        return(
            <div>

                <div className='fdb-box fdb-touch'>
                    <h2>{this.props.pub_data.pub_data.name}</h2>
                    <div id='tree-holder'></div>
                </div>
            </div>)
    }
};


export default PubTreeJQ