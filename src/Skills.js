import { Component } from 'react';
import './styles.css';

export default class Skills extends Component {
  render() {
    return (
      <div className="user-skills">
        <div className="skill">Html</div>
        <div className="skill">CSS</div>
        <div className="skill">Javascript</div>
        <div className="skill">React</div>
        <div className="skill">Node</div>
      </div>
    );
  }
}
