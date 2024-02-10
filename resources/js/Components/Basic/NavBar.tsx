import React from "react";

const NavBar: React.FC = () => {

    const handleDrawerToggle = () => {
        document.body.classList.toggle('drawer-toggled');
    };

    return (
        <nav className="top-app-bar navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid px-4">

                <button className="btn btn-lg btn-icon order-1 order-lg-0" id="drawerToggle" onClick={handleDrawerToggle} ><i className="material-icons">menu</i></button>

                <a className="navbar-brand me-auto" href="javascript:void(0);"><div className="text-uppercase font-monospace">Admin Pro</div></a>

                <div className="d-flex align-items-center mx-3 me-lg-0">
                    <div className="d-flex">
                        <div className="dropdown dropdown-notifications d-none d-sm-block">
                            <button className="btn btn-lg btn-icon dropdown-toggle me-3" id="dropdownMenuNotifications" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">notifications</i></button>
                            <ul className="dropdown-menu dropdown-menu-end me-3 mt-3 py-0 overflow-hidden" aria-labelledby="dropdownMenuNotifications">
                                <li><h6 className="dropdown-header bg-primary text-white fw-500 py-3">Alerts</h6></li>
                                <li><hr className="dropdown-divider my-0" /></li>
                                <li>
                                    <a className="dropdown-item unread" href="#!">
                                        <i className="material-icons leading-icon">assessment</i>
                                        <div className="dropdown-item-content me-2">
                                            <div className="dropdown-item-content-text">Your March performance report is ready to view.</div>
                                            <div className="dropdown-item-content-subtext">Mar 12, 2023 · Performance</div>
                                        </div>
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider my-0" /></li>
                                <li>
                                    <a className="dropdown-item py-3" href="#!">
                                        <div className="d-flex align-items-center w-100 justify-content-end text-primary">
                                            <div className="fst-button small">View all</div>
                                            <i className="material-icons icon-sm ms-1">chevron_right</i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button className="btn btn-lg btn-icon dropdown-toggle" id="dropdownMenuProfile" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">person</i></button>
                            <ul className="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="dropdownMenuProfile">
                                <li>
                                    <a className="dropdown-item" href="#!">
                                        <i className="material-icons leading-icon">person</i>
                                        <div className="me-3">Profile</div>
                                    </a>
                                </li>                        
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="#!">
                                        <i className="material-icons leading-icon">logout</i>
                                        <div className="me-3">Logout</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
