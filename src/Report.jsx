import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPeopleGroup,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Report = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <img src="jindal-logo-revised-2@2x.png" alt="User" />
        </div>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) => (isActive ? "active" : "menu-item")}
        >
          <FontAwesomeIcon icon={faHouse} size="x" className="home" />
          Dashboard
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) => (isActive ? "active" : "menu-item")}
        >
          <FontAwesomeIcon icon={faFile} size="x" className="home" />
          Report
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? "active" : "menu-item")}
        >
          <FontAwesomeIcon icon={faPeopleGroup} size="x" className="home" />
          Team
        </NavLink>
      </div>
      <div className="content">
        <div className="header">
          <main>
            <div className="Dsbd">Dashboard</div>
            <div className="breadcrumb">Home / Home</div>
          </main>
          <div className="user-profile">
            <img src="1.jpg" alt="User" />
          </div>
        </div>
        <div className="search-section">
          <div className="search-row">
            <select>
              <option>Select Location</option>
              <option>Angul</option>
              <option>Raigarh</option>
              <option>Patratu</option>
            </select>
            <select>
              <option>Select Team Head</option>
              <option>S.K. Sharma</option>
              <option>Amit Jashwal</option>
            </select>
            <input type="date" />
            <button id="ps">Search</button>
          </div>
        </div>
        <div className="summary-section">
          <h2 id="tx" className="vv">
            Report Summary
          </h2>
          <button id="pld" className="add-members-btn">
            + Add Report
          </button>
        </div>
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th className="trs">Sr.No.</th>
                <th>Location</th>
                <th>Team Head</th>
                <th>Shift In charge</th>
                <th>Security Staff</th>
                <th>Schedule Date</th>
                <th>Schedule Time</th>
                <th>Team Members</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Angul</td>
                <td>Arjun Patil</td>
                <td>Amit Singh</td>
                <td>Suraj Das</td>
                <td>12-04-2023</td>
                <td>18:30 pm</td>
                <td>
                  <a href="#!">View Member</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Raigarh</td>
                <td>Arjun Patil</td>
                <td>Amit Singh</td>
                <td>Suraj Das</td>
                <td>12-04-2023</td>
                <td>18:30 pm</td>
                <td>
                  <a href="#!">View Member</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Patratu</td>
                <td>Arjun Patil</td>
                <td>Amit Singh</td>
                <td>Suraj Das</td>
                <td>12-04-2023</td>
                <td>18:30 pm</td>
                <td>
                  <a href="#!">View Member</a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="pagination">
            <div>Showing 1 to 3 of 3 entries</div>
            <div className="pg2">
              <button>&laquo;</button>
              <button id="pn">1</button>
              <button>&raquo;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
