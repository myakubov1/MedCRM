/* eslint-disable no-shadow */
import { useAuth } from '../../hooks/useAuth';

function TopNavbar() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    logout();
  };
  return (
    <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
      <a href="#" className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
      </a>
      <a href="#" className="sidebar-toggler flex-shrink-0">
        <i className="fa fa-bars" />
      </a>
      <SearchBar />
      <div className="navbar-nav align-items-center ms-auto">
        <MessagesBar />
        <NotificationBar />
        <ProfileBarUnlogged logout={handleLogout}/>
      </div>
    </nav>
  );
}

function SearchBar() {
  return (
    <form className="d-none d-md-flex ms-4">
      <input className="form-control border-0" type="search" placeholder="Search" />
    </form>
  );
}
function MessagesBar() {
  return (
    <div className="nav-item dropdown">
      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
        <i className="fa fa-envelope me-lg-2" />
        <span className="d-none d-lg-inline-flex">Message</span>
      </a>
      <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
        <a href="#" className="dropdown-item">
          <div className="d-flex align-items-center">
            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
            <div className="ms-2">
              <h6 className="fw-normal mb-0">Jhon send you a message</h6>
              <small>15 minutes ago</small>
            </div>
          </div>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <div className="d-flex align-items-center">
            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
            <div className="ms-2">
              <h6 className="fw-normal mb-0">Jhon send you a message</h6>
              <small>15 minutes ago</small>
            </div>
          </div>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <div className="d-flex align-items-center">
            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
            <div className="ms-2">
              <h6 className="fw-normal mb-0">Jhon send you a message</h6>
              <small>15 minutes ago</small>
            </div>
          </div>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item text-center">See all message</a>
      </div>
    </div>
  );
}
function NotificationBar() {
  return (
    <div className="nav-item dropdown">
      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
        <i className="fa fa-bell me-lg-2" />
        <span className="d-none d-lg-inline-flex">Notification</span>
      </a>
      <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
        <a href="#" className="dropdown-item">
          <h6 className="fw-normal mb-0">Profile updated</h6>
          <small>15 minutes ago</small>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <h6 className="fw-normal mb-0">New user added</h6>
          <small>15 minutes ago</small>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <h6 className="fw-normal mb-0">Password changed</h6>
          <small>15 minutes ago</small>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item text-center">See all notifications</a>
      </div>
    </div>
  );
}
function ProfileBarUnlogged({ logout }) {
  return (
    <div className="nav-item dropdown">
      <a href='#' onClick={logout} className="nav-link" >
        <span className="d-none d-lg-inline-flex">Log Out</span>
      </a>
    </div>
  );
}
function ProfileBarUser() {
  return (
    <div className="nav-item dropdown">
      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
        <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
        <span className="d-none d-lg-inline-flex">John Doe</span>
      </a>
      <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
        <a href="#" className="dropdown-item">My Profile</a>
        <a href="#" className="dropdown-item">Settings</a>
        <a href="#" className="dropdown-item">Log Out</a>
      </div>
    </div>
  );
}
export default TopNavbar;
