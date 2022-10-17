import React, { useEffect, useState } from "react";

async function setDats() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("出来数据了");
    }, 3000);
  });
}

function Rects() {
  const [data, setData] = useState("");
  useEffect(() => {
    setDats().then((res) => {
      setData(res);
    });
  }, []);
  return (
    // <Stage width={1000} height={1000}>
    //   <Layer>
    //     <Text text={data} />
    //     <Rect x={0} y={20} width={50} height={50} fill="red"></Rect>
    //   </Layer>
    // </Stage>
    <div>{data}</div>
  );
}

export default Rects;
