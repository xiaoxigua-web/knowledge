
import { Tabs } from 'antd';
import PropsCallback from './PropsCallback';
import Callback from './Callback';

const TabsCom = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: '父传子props',
        key: '1',
        children: <PropsCallback />,
      },
      {
        label: '子传父callback',
        key: '2',
        children: <Callback />,
        disabled: false,
      },
      {
        label: 'Tab 3',
        key: '3',
        children: 'Tab 3',
      },
    ]}
  />
);
export default TabsCom;