import { memo, useCallback, useState } from 'react';

const Child = (props) => {
  let { callback } = props;
  console.log('Child执行了');
  callback()
  return (
    <div>
     子组件
    </div>
  )
}

const MemoChild = memo(Child);

const Index = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    const callback = useCallback(()=>{
      console.log('callback')
    },[]) 

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={handleClick}>更新父组件的值</button>
            <MemoChild callback={callback} />
        </div>
    )
}




export default Index; 