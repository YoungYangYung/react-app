import React,{} from 'react';

const Child2 = ()=>{
    console.log('000')
    return (
        <div>我只是个头部</div>
    );
}

export default React.memo(Child2);