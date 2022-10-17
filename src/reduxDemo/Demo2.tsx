import React from 'react';
import { connect } from 'react-redux';

const Demo2 = (props)=>{
    return (
        <div>
            { props.count }
        </div>
    )
}

const mapStateToProps = state =>{
    return state;
}

export default connect(mapStateToProps)(Demo2);