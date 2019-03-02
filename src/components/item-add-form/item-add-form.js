import React, {Component} from 'react';
import './item-add-form.css';


export default class ItemAddForm extends Component {
  addItem = () => {
    this.setState((state) => {
    })
  };

  render() {

    return (
      <div className="item-add-form">
        <button className="btn btn-outline-secondary"
        onClick={() => this.props.onAdded('sg')}>Add Item</button>

      </div>
    )
  }
}
