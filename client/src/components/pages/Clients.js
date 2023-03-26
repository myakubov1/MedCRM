import RecentClients from '../RecentClients';

function Clients() {
  return (
      <div className="container-fluid py-4 px-4">
        <RecentClients page={1} limit={30}/>
      </div>
  );
}
export default Clients;
