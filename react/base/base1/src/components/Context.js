import { createContext,useContext } from "react"

const context = createContext(1)


const Top = () => {
  const value = useContext(context)
  return (
    <>
    我是父组件
    <context.Provider value={2}>
      <div>context:{value}</div>
      <Middle></Middle>
    </context.Provider>
    </>
  )
}

const Middle = () => {
  const value = useContext(context)
  return (
    <>
    <div>我是子组件</div> 
    <div>context:{value}</div>
    <Bottom></Bottom>
    </>
  )
}

const Bottom = () => {
  const value = useContext(context)
  return (
    <div>
      我是孙组件
      context:{value}
    </div>
  )
}

export default Top