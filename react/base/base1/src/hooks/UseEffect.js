import { useEffect, useState } from "react";

async function queryData() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  })
  return data;
}

function UseEffect() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    queryData().then(data => {
      setNum(data);
    })
  }, []);

  return (
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
  );
}


export default UseEffect;