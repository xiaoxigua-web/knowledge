
import { Tabs } from 'antd';
import PropsCallback from './PropsCallback';
import Callback from './Callback';
import Context from './Context';

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
        label: 'Context',
        key: '3',
        children: <Context />,
      },
    ]}
  />
);
export default TabsCom;