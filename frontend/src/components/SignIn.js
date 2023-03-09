/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const data = {
      username,
      password,
    };

    await axios.post('http://localhost:3001/api/login', data)
      .then((response) => {
        setToken(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setUsername('');
        setPassword('');
      });
  };

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <a href="#" className="">
                  <h3 className="text-primary">
                    MedCRM
                  </h3>
                </a>
                <h3>Sign In</h3>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={handleSubmit}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
