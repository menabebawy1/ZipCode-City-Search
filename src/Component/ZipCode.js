import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from '../Styles/ZipCodeStyles.module.css';

function City({ data }) {
  return (
    <div>
      <ul>
        <li>{data.City}</li>
      </ul>
    </div>
  );
}

function ZipSearchField({ zipCode, onChange }) {
  return (
    <div>
      <input
        type='text'
        value={zipCode}
        placeholder='Enter Zip Code'
        onChange={onChange}
      ></input>
    </div>
  );
}

export default class ZipCode extends Component {
  render() {
    return (
      <div>
        <div className={styles.title}>
          <h1 className={styles.titleText}>Zip Code Lookup</h1>
        </div>

        <nav className={styles.navbar}>
          <div className={styles.navbarDiv}>
            <Link to={'/zipcode'} className={styles.navbarLinkZipCode}>
              <div className={styles.navbarItem}>
                <li>Zip Code Lookup:</li>
                <ZipSearchField />
              </div>
            </Link>
          </div>

          <div className={styles.navbarDiv}>
            <Link to={'/city'} className={styles.navbarLinkCity}>
              <div className={styles.navbarItem}>
                <li>City Lookup</li>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}