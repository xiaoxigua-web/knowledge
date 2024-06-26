
import { Tabs } from 'antd';
import UseEffect from './UseEffect'
import UseReducer from './UseReducer.tsx'
import UseRef1 from './UseRef1'
import UseRef2 from './UseRef2'
import UseContext from './UseContext'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'

const TabsCom = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'useEffect',
        key: '1',
        children: <UseEffect />,
      },
      {
        label: 'useContext',
        key: '11',
        children: <UseContext />,
      },
      {
        label: 'useReducer',
        key: '2',
        children: <UseReducer />,
      },
      {
        label: 'UseRef1',
        key: '3',
        children: <UseRef1 />,
      },
      {
        label: 'UseRef2',
        key: '31',
        children: <UseRef2 />,
      },
      {
        label: 'UseMemo',
        key: '4',
        children: <UseMemo />,
      },
      {
        label: 'UseCallback',
        key: '5',
        children: <UseCallback />,
      }
    ]}
  />
);
export default TabsCom;