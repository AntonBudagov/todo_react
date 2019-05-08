import React, {useState} from 'react';
import './item-add-form.css';


const ItemAddForm = (props) => {

  const [label, setLabel] = useState('');
  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onAdded(label);
    setLabel('');
  };

  return (
    <form className="item-add-form  d-flex" onSubmit={onSubmit}>
      <input type="text" className="form-control"
             onChange={onLabelChange}
             placeholder="what needs to be done"
             value={label}
      />
      <button className="btn btn-outline-secondary">Add Item</button>

    </form>
  )

};

export default ItemAddForm;
