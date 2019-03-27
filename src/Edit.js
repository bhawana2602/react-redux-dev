import React, { Component } from 'react';
import { connect } from 'react-redux'

class Edit extends Component {
    constructor(){
        super();
    //   this.handleDelete = this.handleDelete.bind(this);
       this.handleUpdateBtn = this.handleUpdateBtn.bind(this);
    }
   handleChange(e){
      this.props.editData(e);
   }
    
   handleUpdateBtn(){
    this.props.updateData();
 }
  
  render() {
      console.log(this.props.editInfo,'edit infooooooooooo')
    return (
     <div >
       <input type="text" name="product" value={this.props.editInfo.product} onChange={(e)=>this.handleChange(e)} />
       <input type="number" name="quantity" value={this.props.editInfo.quantity}  onChange={(e)=>this.handleChange(e)}  />
       <input type="submit" onClick={this.handleUpdateBtn}/>
      </div>
     
    );
  }
}


const mapStateToProps = state => ({
    listData: state
  })

//export default List;

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      editData: (e) => dispatch({ type: 'EditDataInfo',data:e }),
       updateData: () => dispatch({ type: 'UpdateInfo' }),
     // reset: () => dispatch({ type: 'RESET' })
    }
  }
  
//export default Edit;
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Edit)