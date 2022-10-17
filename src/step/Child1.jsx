import React, { useContext, useMemo } from 'react';
import { MyContext } from './ContextManager';

const Child = ()=>{
    const { state,dispatch } = useContext(MyContext);
    const {step,count,number} = state;
    // 使用useMemo解决useContext带来的透传性能问题
    return useMemo(()=>{
        return (
            <div>
                <div>step: {step}</div>
                <div>count: {count}</div>
                <div>number: {number}</div>
                <button onClick={()=>{dispatch({type:'step'})}}>++step</button>
                <button onClick={()=>{dispatch({type:'count'})}}>++count</button>
                <button onClick={()=>{dispatch({type:'number'})}}>step+count</button>
            </div>
        );
    },[step,count,number,dispatch])
}

export default React.memo(Child);