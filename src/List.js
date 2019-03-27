import React, { Component } from 'react';
import { connect } from 'react-redux'
import Edit from './Edit';

class List extends Component {
    constructor(){
        super();
    //   this.handleDelete = this.handleDelete.bind(this);
      // this.handleEdit = this.handleEdit.bind(this);
    }
    handleDelete(id){
      this.props.delete(id)
//console.log(id,'11111111111111111111122222222222222222222222')
    }
    handleEdit(id){

      this.props.edit(id)
    }
    
  render() {
      //console.log(this.props.listData.users,'render calling')
    return (
     <div >
       <p>Items : {this.props.listData && this.props.listData.length}</p>
        {this.props.listData && this.props.listData.map((data)=>
                <p>{data.id} {data.price} {data.product} {data.quantity} 
                <a href="Javascript:void(0);" onClick={()=>this.handleDelete(data.id)}>DELETE</a> ||
                <a href="Javascript:void(0);" onClick={()=>this.handleEdit(data.id)}>EDIT</a>
                </p>
            )}

            <Edit editInfo = {this.props.editData} />
      </div>
     
    );
  }
}


const mapStateToProps = state => {

  console.log(state,'state.............')

  return {
    listData: state.users.data,
    editData: state.users.EditData,
  }
}

//export default List;

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      delete: (id) => dispatch({ type: 'DELETE',data:id }),
      edit: (id) => dispatch({ type: 'EDIT' ,data:id }),
     // reset: () => dispatch({ type: 'RESET' })
    }
  }
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)