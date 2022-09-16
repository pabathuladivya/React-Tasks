// const {createStore} = require("redux")

const initialState = {
    numOfStudents : 100
}

const studentList =()=>{
    return {
        type:"STUDENT_LIST"
    }
}

const reducer = (state=initialState,action)
 if(action.type==="STUDENT_LIST"){
    return {numOfStudents: state.numOfStudents-1}
 }else {
    return state;
 }

const store = createStore(reducer);
store.subscribe(()=>{console.log(store.getState())})
 store.dispatch(studentList());