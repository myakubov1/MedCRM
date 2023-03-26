import TotalWidget from '../TotalWidget';
import Messages from '../Messages';
import RecentClients from '../RecentClients';
import Calendar from '../Calendar';
import ToDoList from '../ToDoList';

function Dashboard() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <TotalWidget name="Today Clients" summary="5678" icon="fa-chart-area" />
          <TotalWidget name="Today Revenue" summary="$3456" icon="fa-chart-line" />
          <TotalWidget name="Total Clients" summary="1234" icon="fa-chart-bar" />
          <TotalWidget name="Total Revenue" summary="$9012" icon="fa-chart-pie" />
        </div>
      </div>
      <div className="container-fluid py-4 px-4">
          <RecentClients page={1} limit={5}/>
      </div>
      <div className="container-fluid py-4 px-4">
        <div className="row g-4">
          <Messages />
          <Calendar/>
          <ToDoList/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
