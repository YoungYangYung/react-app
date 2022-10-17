import React, { useReducer } from 'react';
import { MyContext } from './ContextManager';
import Child1 from './Child1';
import Child2 from './Child2';

const initState = { step:0, count:0,number:0};

const reducer = (state,action) =>{
    switch(action.type){
        case 'step':
            return {...state,step: state.step+1};
        case 'count':
            return {...state, count: state.count+1};
        case 'number':
            return {...state,number:state.step+state.count};
        default: return state;
    }
}

const Step = ()=>{
    const [state,dispatch] = useReducer(reducer,initState);
    
    return (
        <MyContext.Provider value={{state,dispatch}}>
            <Child2/>
            <Child1/>
        </MyContext.Provider>
    )
}

export default Step;