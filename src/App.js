import React from 'react';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';

import Home from './Home';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import { UserContext, getLoggedIn } from './context';

export default function App() {
  return (
    <div id="content">
      <HashRouter>
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-2">
          <a className="navbar-brand ps-2" href="#/">
            Bad Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link"data-tooltip="Main page.">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="create-account" className="nav-link" data-tooltip="Create a new account">
                  Create Account
                </Link>
              </li>
              <li className="nav-item">
                <Link to="deposit" className="nav-link"data-tooltip="Make deposits to your account.">
                  Deposit
                </Link>
              </li>
              <li className="nav-item">
                <Link to="withdraw" className="nav-link"data-tooltip="Take money from you account.">
                  Withdraw
                </Link>
              </li>
              <li className="nav-item">
                <Link to="all-data" className="nav-link"data-tooltip="See everybody's accounts.">
                  All Data
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="mainblock" className="my-2 mx-4 p-4">
          <UserContext.Provider value={{ user: getLoggedIn() }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="create-account" element={<CreateAccount />} />
              <Route path="deposit" element={<Deposit />} />
              <Route path="withdraw" element={<Withdraw />} />
              <Route path="all-data" element={<AllData />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </HashRouter>

      <footer>
        <div className="d-flex justify-content-between px-2 py-4 my-4 border-top fs-7">
          <p className="text-muted">
            <small>© 2023 Reygen Capacia, MIT xPro</small>
          </p>
        </div>
      </footer>
    </div>
  );
}
