import {GENETARE_PIN, SAVE_PIN, DELETE_PIN, EDIT_USER_NAME} from '../Common/actionTypes';
import {store} from '../store';

//Action to generate PIN
export const generatePinAction = (genPin) => {
    store.dispatch({type: GENETARE_PIN, generatedPin: genPin})
}

//Action to save PIN
export const savePinAction = (pinObj) => {
    store.dispatch({type:SAVE_PIN, newPinObj: pinObj})
}

//Action to delete PIN
export const deletePinAction = (item) => {
    store.dispatch({type:DELETE_PIN, deleteItem: item})
}

//Action to edit User Name in saved PIN list
export const userNameChangeAction = (currentVal, item) => {
    store.dispatch({type:EDIT_USER_NAME, userObject: item, newName:currentVal})
}
