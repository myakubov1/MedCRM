import TotalWidget from '../TotalWidget';
import Messages from '../Messages';

function Dashboard() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <TotalWidget name="Total sale" summary="1234" icon="fa-chart-bar" />
          <TotalWidget name="Today Revenue" summary="5678" icon="fa-chart-area" />
          <TotalWidget name="Total Revenue" summary="9012" icon="fa-chart-pie" />
          <TotalWidget name="Today Sale" summary="3456" icon="fa-chart-line" />
        </div>
      </div>

      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Worldwide Sales</h6>
                <a href="#">Show All</a>
              </div>
              <canvas id="worldwide-sales" />
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Sales & Revenue</h6>
                <a href="">Show All</a>
              </div>
              <canvas id="sales-revenue" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-4 px-4">
        <div className="bg-light text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Recent Sales</h6>
            <a href="">Show All</a>
          </div>
          <div className="table-responsive">
            <table className="table text-start align-middle table-bordered table-hover mb-0">
              <thead>
                <tr className="text-dark">
                  <th scope="col">
                    <input className="form-check-input" type="checkbox" />
                  </th>
                  <th scope="col">Date</th>
                  <th scope="col">Client</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>John Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="">
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>John Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="">
                      Detail
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <Messages />
          <div className="col-sm-12 col-md-6 col-xl-4">
            <div className="h-100 bg-light rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Calender</h6>
                <a href="">Show All</a>
              </div>
              <div id="calender" />
            </div>
          </div>
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
                <button type="button" className="btn btn-primary ms-2">
                  Add
                </button>
              </div>
              <div className="d-flex align-items-center border-bottom py-2">
                <input className="form-check-input m-0" type="checkbox" />
                <div className="w-100 ms-3">
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <span>Short task goes here...</span>
                    <button type="button" className="btn btn-sm">
                      <i className="fa fa-times" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center border-bottom py-2">
                <input className="form-check-input m-0" type="checkbox" />
                <div className="w-100 ms-3">
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <span>Short task goes here...</span>
                    <button type="button" className="btn btn-sm">
                      <i className="fa fa-times" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center border-bottom py-2">
                <input
                  className="form-check-input m-0"
                  type="checkbox"
                  checked
                />
                <div className="w-100 ms-3">
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <span>
                      <del>Short task goes here...</del>
                    </span>
                    <button type="button" className="btn btn-sm text-primary">
                      <i className="fa fa-times" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center border-bottom py-2">
                <input className="form-check-input m-0" type="checkbox" />
                <div className="w-100 ms-3">
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <span>Short task goes here...</span>
                    <button type="button" className="btn btn-sm">
                      <i className="fa fa-times" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center pt-2">
                <input className="form-check-input m-0" type="checkbox" />
                <div className="w-100 ms-3">
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <span>Short task goes here...</span>
                    <button type="button" className="btn btn-sm">
                      <i className="fa fa-times" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-4 px-4">
        <div className="bg-light rounded-top p-4">
          <div className="row">
            <div className="col-12 col-sm-6 text-center text-sm-start">
              &copy;
              <a href="#">Your Site Name</a>
              , All Right Reserved.
            </div>
            <div className="col-12 col-sm-6 text-center text-sm-end">123</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
