import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React Router <<<>>> Chat Screen */}
      </div>
    </div>
  );
}

export default App;
