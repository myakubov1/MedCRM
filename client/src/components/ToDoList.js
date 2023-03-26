import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { ApiUrlProt } from '../api';

function ToDoList() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAsyncTasks = async () => {
      await axios.get(`${ApiUrlProt}/tasks/`, {
        params: {
          user: jwtDecode(sessionStorage.getItem('token')).username,
        },
      })
        .then((response) => {
          setTasks(response.data);
        })
        .catch((e) => {
          setError(e);
          console.log(e);
        })
        .finally(() => {
          setLoaded(true);
        });
    };
    loadAsyncTasks();
    setLoading(false);
  }, []);

  const addTask = async () => {
    await axios.post(`${ApiUrlProt}/tasks`, {
      value: 'Make toDOlist',
      isCompleted: false,
      user: 'Max',
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        setError(e);
        console.log(e);
      })
      .finally(() => {
        setLoaded(true);
      });
  };

  return (
        <div className="col-sm-12 col-md-6 col-xl-4">
            <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">To Do List</h6>
                    <a href="">Show All</a>
                </div>
                <div className="d-flex mb-2">
                    <input
                        className="form-control bg-transparent"
                        type="text"
                        placeholder="Enter task"
                    />
                    <button onClick={addTask} type="button" className="btn btn-primary ms-2">
                        Add
                    </button>
                </div>
                {loaded ? tasks?.map((task) => <ToDo key={task._id} value={task.value} checked={task.isCompleted}/>) : null}
            </div>
        </div>
  );
}

function ToDo({ value, checked }) {
  return (
        <div className="d-flex align-items-center border-bottom py-2">
            <input
                className="form-check-input m-0"
                type="checkbox"
                onClick={() => (!checked)}
            />
            <div className="w-100 ms-3">
                <div className="d-flex w-100 align-items-center justify-content-between">
                        {checked ? <span>{value}</span> : <del>{value}</del>}
                    <button type="button" className="btn btn-sm text-primary">
                        <i className="fa fa-times" />
                    </button>
                </div>
            </div>
        </div>
  );
}
export default ToDoList;
