import React from 'react';
import { Card } from './Card';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Card
      header="Welcome to The Bad Bank"
      text={
        <div className="d-flex mb-3">
          <img className="img-fluid" src="./bank_logo.png" width="30%" alt="bank-logo" />
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">We will keep your money safe!</h5>
              <p className="card-text">
                The problem is, your information will not be. Use at your own RISK!
              </p>
            </div>
          </div>
        </div>
      }>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">

        <Link to="create-account" className="nav-link" data-tooltip="Create a new account">
        {/* <Link to="/create-account/" className="nav-link"> */}
          <button type="button" className="btn btn-primary px-4 me-md-2">
            Create Account
          </button>
        </Link>
      </div>
    </Card>
  );
}
