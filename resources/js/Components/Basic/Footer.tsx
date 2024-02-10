import React from "react";

const Footer: React.FC = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="py-4 mt-auto border-top" style={{ minHeight: "74px" }}>
            <div className="container-fluid px-4">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between small">
                    <div className="me-sm-2">Copyright © Tharindu Wijayarathna {year}</div>
                    {/* 
              Commented out HTML comments for JSX
              Use className instead of class
          */}
                    {/* <div className="d-flex ms-sm-2">
            <a className="text-decoration-none" href="#!">
              Privacy Policy
            </a>
            <div className="mx-1">·</div>
            <a className="text-decoration-none" href="#!">
              Terms &amp; Conditions
            </a>
          </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
