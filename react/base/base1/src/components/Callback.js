import { useState } from 'react'

const Index = () => { 
  let callBack = (status) => {
    console.log('我是回调函数',status)
  }
  return (
    <>
      <div>我是父组件</div>
      <Child callBack={callBack}></Child>
    </>
  )
}


const Child = (props) => { 
  let {callBack} = props
  let [status, setStatus] = useState(false)
  let handleClick = () => { 
    console.log('我是子组件')
    setStatus(!status)
    callBack(status)
  }
  return (
    <>
      <div>我是子组件</div>
      <button onClick={handleClick}>点击我改变状态</button>
    </>
  )
}

export default Index