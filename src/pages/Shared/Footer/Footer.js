import React, { useEffect, useState } from "react";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer className=" bg-dark py-3">
      <div className="container text-center text-white d-flex justify-content-between align-items-center">
        <div>
          <p>Copyright © {date}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p style={{marginRight: '15px'}}>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
