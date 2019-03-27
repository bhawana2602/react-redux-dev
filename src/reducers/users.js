var defaultData = { data:[
  {
      "id": "0001",
      "price": 500,
      "product": "Cake",
      "quantity": 8
  },
  {
      "id": "0002",
      "price": 10,
      "product": "Patise",
      "quantity": 4
  },
  {
      "id": "0003",
      "price": 50,
      "product": "Masala Dosa",
      "quantity": 3
  }
],EditData:{}}
const users = (state, action) => {
    switch (action.type) {
      case 'DELETE':
      let newStateData={...state};
      newStateData['data'] = state.data.filter(obj => obj.id !== action.data) 
        return newStateData
      case 'EDIT':
      let newEditData = state.data.filter(state => state.id === action.data) 
      
      var editData = {...state};
      editData.EditData = newEditData[0];
        return editData;
      
      case 'EditDataInfo':
      let infoArr =state.EditData;
      let name = action.data.target.name;
       infoArr[name] =action.data.target.value;
      console.log(infoArr,'mkiijunhytgbvfcder')
      var editData = {...state};
      editData.EditData = infoArr;
        return editData;

        case 'UpdateInfo':
        console.log(state.EditData.id)
        var updateData = {...state};
         let newEditDataUpdate = state.data.filter(newObj => newObj.id !== state.EditData.id) 
         console.log(newEditDataUpdate.push(state.EditData),'mmmnnnssaazccvhj')
        // var updateData = {...state};
         updateData.data = newEditDataUpdate;
        return updateData;
         // return state;

      default:
        return defaultData
    }
  }
  
  export default users
  
  