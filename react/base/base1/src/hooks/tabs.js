
import { Tabs } from 'antd';
import UseEffect from './UseEffect'
import UseReducer from './UseReducer.tsx'

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
        label: 'useReducer',
        key: '2',
        children: <UseReducer />,
      }
    ]}
  />
);
export default TabsCom;