
import './App.css';
import TabsCom from './components/Tabs';
import HooksCom from './hooks/tabs';

function App() {
  return (
    <div className="App">
      <div>
        组件通信
      <TabsCom />
      </div>
      <div>
        hooks
       <HooksCom />
      </div>
    </div>
  );
}

export default App;
