// 通过useref在父组件中调用子组件上面的方法

import  { useRef, forwardRef,useImperativeHandle } from 'react';

const UseRef2 = () => {
    const childRef = useRef(null);
    return (
        <div>
            <Child ref={childRef} />
            <button onClick={() => childRef.current.changeColor('red')}>按钮</button>
        </div>
    )
}

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    changeColor: (color) => {
      console.log('changeColor', color);
    }
  }))

  return (
    <div>子组件</div>
  )
})

export default UseRef2;