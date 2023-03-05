import '../App.css';
import LeftSidebar from './LeftSidebar';
import Content from './Content';

function App() {
  return (
    <div className="container-fluid position-relative bg-white d-flex p-0">
      <LeftSidebar />
      <Content />
    </div>
  );
}

export default App;
