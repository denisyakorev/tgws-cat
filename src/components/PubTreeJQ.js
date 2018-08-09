import 'rc-tree/assets/index.css';
import React from 'react';
import $ from 'jquery'
import 'jstree/dist/jstree'
import {connect} from 'react-redux';




class PubTreeJQ extends React.Component{

    changePublication(i){
        console.log('Hi');
        this.props.changePublication(this.newPubCode);
    }

    componentDidMount(){
        var obj = JSON.parse(this.props.pubStore.publication.content_json);

        $(function() {
          $('#tree-holder').jstree(obj).bind("select_node.jstree", function (event, data) {                          
             $('#checked-pub').attr('value', data.node.a_attr.href).change(function(event){
                console.log($('#checked-pub').attr('value'));

             }).trigger('change');
          });
        });        
    }


    render() {
        console.log(this.props);
        return(
            <div>
                <div className='fdb-box fdb-touch'>
                    <h2>{this.props.pubStore.publication.name}</h2>
                    <div id='tree-holder'></div>
                    <input key='checked-pub' id='checked-pub' ref={(input) => {this.newPubCode = input}} type='hidden' onChange={this.changePublication.bind(this)} />

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
            console.log('changePublication', newPubCode);
            dispatch({type: 'CHANGE_PUBLICATION', payload: newPubCode});
        }
    })
    )(PubTreeJQ);