import '../App.css';
import LeftSidebar from './LeftSidebar';
import Content from './Content';
import SignIn from './SignIn';

function App() {
  const authorized = (
    <div className="container-fluid position-relative bg-white d-flex p-0">
      <LeftSidebar />
      <Content />
    </div>
  );
  const unauthorized = (
    <SignIn />
  );
  return (
    <div>
      {unauthorized}
    </div>
  );
}

export default App;
