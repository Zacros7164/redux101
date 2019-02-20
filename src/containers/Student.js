import React, { Component } from 'react';

// we would like to inform this component from Redux
// to do that we need some glue

// this container needs to know about theStore so it can use it's state, and update as needed
// To accomplish this, we used the connect method from react-redux, this is our glue

import { connect } from 'react-redux';


// we need bindActionCreators from redux, 
// so that we can get the actions to dispatch to the reducers

import { bindActionCreators } from 'redux';

class Student extends Component{
    render(){
        const students = this.props.rightSideOfRoom.map((student)=>{
            return <li>{student}</li>
        })
        console.log(this.props)
        return(
            <div>
                <h1>Students!</h1>
                {students}
            </div>
        )
    }
}



// =====OUTIDE OF THE CLASS=====

// we need a function to map the redux state
// to this Component's props. Redux state ALWAYS comes in as props
function mapStateToProps(state){
    // the state parameter in mapStateToProps IS THE ROOT REDUCER
    // this funciton returns an object
    // property will be props in THIS COMPONENT
    // value will be the piece of state in the reducer

    return {
        // nameInThisComponent : nameInRootReducer
        rightSideOfRoom : state.students
    }

}

// old Vanilla React way
// export default Student

// new Redux way
export default connect(mapStateToProps)(Student);