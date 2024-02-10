import React from "react";

const SideBar: React.FC = () => {

    return (
        <div id="layoutDrawer_nav">
            <nav className="drawer accordion drawer-light bg-white" id="drawerAccordion">
                <div className="drawer-menu">
                    <div className="nav">
                        <div className="drawer-menu-heading">UI Toolkit</div>

                        <a
                            className="nav-link collapsed"
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseContent"
                            aria-expanded="false"
                            aria-controls="collapseContent"
                        >
                            <div className="nav-link-icon">
                                <i className="material-icons">amp_stories</i>
                            </div>
                            Content
                            <div className="drawer-collapse-arrow">
                                <i className="material-icons">expand_more</i>
                            </div>
                        </a>

                        <div className="collapse" id="collapseContent" aria-labelledby="headingOne" data-bs-parent="#drawerAccordion">
                            <nav className="drawer-menu-nested nav">
                                <a className="nav-link" href="#">
                                    Icons
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="drawer-footer border-top">
                    <div className="d-flex align-items-center">
                        <i className="material-icons text-muted">account_circle</i>
                        <div className="ms-3">
                            <div className="caption">Logged in as:</div>
                            <div className="small fw-500">Tharindu</div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default SideBar;
