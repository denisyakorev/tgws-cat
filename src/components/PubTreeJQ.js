import 'rc-tree/assets/index.css';
import React from 'react';
import $ from 'jquery'
import 'jstree/dist/jstree'
import {connect} from 'react-redux';




class PubTreeJQ extends React.Component{

    changePublication(){
        this.props.changePublication(this.newPubCode.value);
    }

    componentDidMount(){
        var obj = JSON.parse(this.props.pubStore.publication.content_json);
        $(function() {
          $('#tree-holder').jstree(obj).bind("select_node.jstree", function (event, data) {                          
             $('#checked-pub').attr('value', data.node.a_attr.href).click(); 
          });
        });        
    }


    render() {        
        return(
            <div>
                <div className='fdb-box fdb-touch'>
                    <h2>{this.props.pubStore.publication.name}</h2>
                    <div id='tree-holder'></div>
                    <input key='checked-pub' id='checked-pub' ref={(input) => {this.newPubCode = input}} type='hidden' onClick={this.changePublication.bind(this)} />

                </div>
            </div>)
    }
};


export default connect(
    state => ({
        pubStore: state
    }),
    dispatch => ({
        changePublication: (newPubCode) => {            
            dispatch({type: 'CHANGE_MODULE', payload: newPubCode});
        }
    })
    )(PubTreeJQ);