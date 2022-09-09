import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="logo-box">
                    <a href="#">
                      <img src="./imgs/Logo PNG.png" alt="pentaLogo" />
                    </a>
                  </figure>
                  <div className="text">
                    <p>
                      A good plus of traveling is that often you get new skills
                      without difficulty and without even noticing it.
                    </p>
                  </div>
                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-title">Services</div>
                  <ul className="list">
                    <li>
                      <a href="#">Water Surve</a>
                    </li>
                    <li>
                      <a href="#">Education for all</a>
                    </li>
                    <li>
                      <a href="#">Food Serving</a>
                    </li>
                    <li>
                      <a href="#">Animal Saves</a>
                    </li>
                    <li>
                      <a href="#">Help Orphan</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
                <div className="contact-widget footer-widget">
                  <div className="footer-title">Contacts</div>
                  <div className="text">
                    <p>
                      <i class="fa-sharp fa-solid fa-location-dot"></i> 51,New
                      Street Birmingham B2 4EG
                    </p>
                    <p>
                      <i class="fa-solid fa-phone"></i> +447456281942
                    </p>
                    <p>
                      <i class="fa-solid fa-envelope"></i>{" "}
                      info@pentatravels.co.ok
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="copyright">
                <a href="#">Penta Travels</a> &copy; 2022 All Right Reserved
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <ul className="footer-nav">
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
