import React from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";

const FlightDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <>
      <div className="container">
        <form>
          <h2>Contact Us</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="first">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                  id="first"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="last">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                  id="last"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="company">Gender</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Your Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="phone">DOB</label>

                <input type="date" className="form-control" id="date" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="email">Seating</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>No preferences</option>
                  <option value="Aisle seat">Aisle seat</option>
                  <option value="Bulkhead seat">Bulkhead seat</option>
                  <option value="Cradle/Baby Basket seat">
                    Cradle/Baby Basket seat
                  </option>
                  <option value="Exit seat">Exit seat</option>
                  <option value="Non smoking window seat">
                    Non smoking window seat
                  </option>
                  <option value="Suitable for disable seat">
                    Suitable for disable seat
                  </option>
                  <option value="Suitable for disable seat">
                    Suitable for disable seat
                  </option>
                  <option value="Legspace">Legspace</option>
                  <option value="Non smoking seat">Non smoking seat</option>
                  <option value="Overwing seat">Overwing seat</option>
                  <option value="Smoking seat">Smoking seat</option>
                  <option value="Window seat">Window seat</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="url">Assistance</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>No preferences</option>
                  <option value="Overwing seat">Deaf</option>
                  <option value="Smoking seat">Blind</option>
                  <option value="Window seat">Wheelchair</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="email">Meal</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>No preferences</option>
                  <option value="BBML">Baby Meal</option>
                  <option value="BLML">Bland Meal</option>
                  <option value="CHML">Child Meal Meal</option>
                  <option value="DBML">Diabetic Meal</option>
                  <option value="FPML">Fruit Platter Meal</option>
                  <option value="GFML">Gluten Intolerant Meal</option>
                  <option value="HNML">Hindu Meal</option>
                  <option value="KSML">Kosher Meal</option>
                  <option value="LCML">Low Calorie Meal</option>
                  <option value="LFML">Low Fat Meal</option>
                  <option value="NLML">Low Lactose Meal</option>
                  <option value="LSML">Low Salt Meal</option>
                  <option value="MOML">Muslim Meal</option>
                  <option value="RVML">Raw Vegetarian Meal</option>
                  <option value="SFML">Seafood Meal</option>
                  <option value="SPML">Special Meal</option>
                  <option value="AVML">Vegetarian Hindu Meal</option>
                  <option value="VJML">Vegetarian Jain Meal</option>
                  <option value="VLML">Vegetarian Lacto-Ovo</option>
                  <option value="VGML">Vegetarian Meal</option>
                  <option value="VOML">Vegetarian Oriental Meal</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="first">Frequent Flyer No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="first"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="first">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                  id="first"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="last">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                  id="last"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="first">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                  id="first"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="last">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                  id="last"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="first">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                  id="first"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="last">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                  id="last"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="first">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                  id="first"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="last">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                  id="last"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="first">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                  id="first"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label for="last">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                  id="last"
                />
              </div>
            </div>
          </div>

          <label for="newsletter">
            Would you like to recieve our email newsletter?
          </label>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="Sure!" id="newsletter" /> Sure!
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FlightDetails;
