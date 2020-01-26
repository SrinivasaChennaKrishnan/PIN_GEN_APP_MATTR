import { GENETARE_PIN, SAVE_PIN, DELETE_PIN, EDIT_USER_NAME } from '../Common/actionTypes';

const initialState = { userObject: [], loader: false }

// Function to check required index to delete or modify in saved pin list
const checkReqIndex = (objectA, objectB) => {
  let reqIndex;
  for (let i = 0; i < objectA.length; i++) {
    if (objectA[i].p1 === objectB.p1 && objectA[i].p2 === objectB.p2 && objectA[i].p3 === objectB.p3 && objectA[i].p4 === objectB.p4 && objectA[i].p5 === objectB.p5) {
      reqIndex = i;
    }
  }
  return reqIndex;
}

// Function to return the state based on the CASE / action performed by the user
export default function rootReducer(state = initialState, action) {
  let userObject = state.userObject;
  switch (action.type) {

    //case executed on click of GENERATE Button
    case GENETARE_PIN:
      return {
        ...state, generatedPin: action.generatedPin
      };

    //case executed on click of SAVE Button
    case SAVE_PIN:
      userObject.push(action.newPinObj)
      return {
        ...state, userObject
      };

    //case executed on click of DELETE Button
    case DELETE_PIN:
      let deleteItem = action.deleteItem;
      let deleteIndex = checkReqIndex(userObject, deleteItem);
      if (deleteIndex > -1) {
        userObject.splice(deleteIndex, 1);
      }
      return {
        ...state, userObject
      };

    //case executed on change of the USER NAME in saved pin list
    case EDIT_USER_NAME:
      let editedName = action.newName;
      let currentObject = action.userObject;
      let editIndex = checkReqIndex(userObject, currentObject);
      if (editIndex > -1) {
        userObject[editIndex].userName = editedName;
      }
      return {
        ...state, userObject
      };

    //case executed by default
    default:
      return state;
  }
}