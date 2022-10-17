import React, { useCallback } from 'react';
import { connect } from 'react-redux';

const Demo1 = (props)=>{
    const click = useCallback(()=>{
        props.sendAction && props.sendAction();
    },[])
    
    return (
        <div style={{marginTop: '50px'}}>
            <button onClick={click}>点我增加</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch)=>{
    return {
        sendAction: ()=>{
            dispatch({
                type: 'add',
                payload: 5
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Demo1);