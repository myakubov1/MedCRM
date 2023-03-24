import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiUrl } from '../../api';

function Clients() {
  const [clients, setClients] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadAsyncClients = async () => {
      console.log(process.env);
      await axios.get(`${ApiUrl}/clients`)
        .then((response) => {
          setClients(response.data);
        })
        .catch((e) => {
          setError(e);
          console.log(e);
        })
        .finally(() => {
          setLoaded(true);
        });
    };
    loadAsyncClients();
    setLoading(false);
  }, []);

  return (
        <div className="container-fluid py-4 px-4">
            <div className="bg-light text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Clients</h6>
                    <a href="">Show All</a>
                </div>
                <div className="table-responsive">
                    <table className="table text-start align-middle table-bordered table-hover mb-0">
                        <thead>
                        <tr className="text-dark">
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Patronymic</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {loaded ? clients.map((client) => <Client
                            key={client._id}
                            name={client.name}
                            surname={client.surname}
                            patronymic={client.patronymic}
                            gender={client.gender}
                            age={client.age}
                            address={client.address}
                            date={client.date}/>) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
}

function Client({
  name, surname, patronymic, gender, age, address, date,
}) {
  return (
        <tr>
            <td >{date}</td>
            <td >{name }</td>
            <td >{surname }</td>
            <td >{patronymic}</td>
            <td >{gender}</td>
            <td >{age}</td>
            <td >{address}</td>
            <td>
                <a className="btn btn-sm btn-primary" href="">
                    Detail
                </a>
            </td>
        </tr>
  );
}
export default Clients;
