import { useMemo, useState } from 'react';

const Child = (props) => {
  let { value } = props;
  console.log('Child执行了');
  let computedValue = useMemo( () => {
    console.log('computedValue');
    return value + 'computed';
  },[value])
  return (
    <div>
      <p>接收到的value:{value}</p>
      <div>计算后的值：{computedValue}</div>
    </div>
  )
}

const Index = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={handleClick}>更新父组件的值</button>
            <input type="text" value={value} onChange={handleChange} />
            <Child value={value} />
        </div>
    )
}




export default Index; 