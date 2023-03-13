import MenuList from './Menu';

function LeftSidebar() {
  return (
    <div className="sidebar pb-3">
      <nav className="navbar bg-light navbar-light">
        <a href="/" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-hashtag me-2" />
            MedCRM
          </h3>
        </a>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">John Doe</h6>
            <span>Admin</span>
          </div>
        </div>
        <MenuList />
      </nav>
    </div>
  );
}

export default LeftSidebar;
