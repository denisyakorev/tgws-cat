import 'rc-tree/assets/index.css';
import React from 'react';
import $ from 'jquery'
import 'jstree/dist/jstree'




class PubTreeJQ extends React.Component{

    componentDidMount(){
        var obj = JSON.parse(this.props.pub_data.pub_data.content_json);
        $(function() {
          $('#tree-holder').jstree(obj).bind("select_node.jstree", function (event, data) {
             document.location = (data.node.a_attr.href);
          });
        });

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