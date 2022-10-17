import React, { useState, useCallback } from "react";
import cls from "classnames";
import "./style.scss";

const Demo1 = () => {
    const [pre, setPre] = useState(false);

    const click = useCallback(()=>{
        setPre(!pre);
    },[pre])

    return (
        <div className="container">
            <div>
                <button onClick={click}>动1</button>
            </div>
            <div className={cls('mubiao', pre ? 'pre':'unPre')}>
                <span>和贷记卡很深刻的</span>
            </div>
        </div>
    );
};

export default React.memo(Demo1);
