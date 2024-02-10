import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const Home: React.FC = () => {
    const { props } = usePage();

    return (
        <AppLayout title='Home'>
            <div className="container-fluid p-4">
                <div id="scrollTarget"></div>

                <h2 className="display-6 mb-0">Dashboards</h2>
                <p className="small text-muted">Test</p>
                <hr className="mb-5 mt-0" />

                {/* Form with 5 text inputs */}

                <h2 className="display-6 mb-3">Form</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="input1" className="form-label">Input 1:</label>
                        <input type="text" className="form-control" id="input1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="input2" className="form-label">Input 2:</label>
                        <input type="text" className="form-control" id="input2" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="input3" className="form-label">Input 3:</label>
                        <input type="text" className="form-control" id="input3" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="input4" className="form-label">Input 4:</label>
                        <input type="text" className="form-control" id="input4" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="input5" className="form-label">Input 5:</label>
                        <input type="text" className="form-control" id="input5" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <hr className="mb-5 mt-5" />
                <h2 className="display-6 mb-0 mt-5">Table</h2>


                <table className="table table-striped table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>John Doe</td>
                            <td>john@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jane Doe</td>
                            <td>
                                Jane@gmail.com
                            </td>
                        </tr>
                    </tbody>
                </table>


                <hr className="mb-5 mt-5" />
                <h2 className="display-6 mb-3 mt-5">Tabs</h2>


                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="tab" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#profile">Profile</a>
                        </li>
                        {/* Add more tabs as needed */}
                    </ul>

                    <div className="tab-content mt-5" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h2 className="display-6 mb-0">Home</h2>
                            <p className="small text-muted">Welcome to the Home tab. This is a test content for the Home tab.</p>
                            <hr className="mb-5 mt-0" />

                            {/* Your additional content for the Home tab goes here */}
                            <p>This is additional content for the Home tab.</p>
                        </div>

                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h2 className="display-6 mb-0">Profile</h2>
                            <p className="small text-muted">Welcome to the Profile tab. This is a test content for the Profile tab.</p>
                            <hr className="mb-5 mt-0" />

                            {/* Your additional content for the Profile tab goes here */}
                            <p>This is additional content for the Profile tab.</p>
                        </div>
                        {/* Add more tab panes as needed */}
                    </div>
                </div>

                <hr className="mb-5 mt-5" />
                <h2 className="display-6 mb-0 mt-5 mb-3">Side Tabs</h2>

                <div className="container-fluid">
                    <div className="row">
                        {/* Side tabs on the left */}
                        <div className="col-md-2">
                            <ul className="nav flex-column nav-pills" id="myTabs">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-side-tab" data-bs-toggle="pill" href="#home-side">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-side-tab" data-bs-toggle="pill" href="#profile-side">Profile</a>
                                </li>
                                {/* Add more tabs as needed */}
                            </ul>
                        </div>

                        {/* Content on the right */}
                        <div className="col-md-10">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-side" role="tabpanel" aria-labelledby="home-side-tab">
                                    <h2 className="display-6 mb-0">Home</h2>
                                    <p className="small text-muted">Welcome to the Home tab. This is a test content for the Home tab.</p>
                                    <hr className="mb-5 mt-0" />

                                    {/* Your additional content for the Home tab goes here */}
                                    <p>This is additional content for the Home tab.</p>
                                </div>

                                <div className="tab-pane fade" id="profile-side" role="tabpanel" aria-labelledby="profile-side-tab">
                                    <h2 className="display-6 mb-0">Profile</h2>
                                    <p className="small text-muted">Welcome to the Profile tab. This is a test content for the Profile tab.</p>
                                    <hr className="mb-5 mt-0" />

                                    {/* Your additional content for the Profile tab goes here */}
                                    <p>This is additional content for the Profile tab.</p>
                                </div>
                                {/* Add more tab panes as needed */}
                            </div>
                        </div>
                    </div>
                </div>


                <hr className="mb-5 mt-5" />
                <h2 className="display-6 mb-3 mt-5">Models</h2>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </AppLayout>
    );
};

export default Home;
