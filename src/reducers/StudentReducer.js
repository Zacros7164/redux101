// reducers are a function that return a piece of state

const students = [
    "Stanley",
    "Kyle",
    "Rob",
    "Ron",
    "JR",
    "Matt",
];

// All reducer functions have 2 params:
// 1a. current state
// 1b. usually, you will want to provide a default state
// 2. info that came from the action

export default function(state = students, action){
    if(action.type === "ADD_STUDENT"){
        // This means I care about this action. Update
        let newStudents = state.slice();
        newStudents.push(action.payload)
        return newStudents
    }else{
        return state;
    }
}