
import { Tabs } from 'antd';
import UseEffect from './UseEffect';

const TabsCom = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'useEffect',
        key: '1',
        children: <UseEffect />,
      }
    ]}
  />
);
export default TabsCom;