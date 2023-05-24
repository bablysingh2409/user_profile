import { Component } from 'react';
import './styles.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="userDetails">
        <p>
          <b>Name: Pranav Sharad Yeole</b>
        </p>
        <p>Email: pranav@google.com</p>
        <p>Phone: 8546465544</p>
        <p>Address: ABC, xyz street.</p>
      </div>
    );
  }
}
