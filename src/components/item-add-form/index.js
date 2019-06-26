import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import actions from '../../redux/reducers/task/actions';
import './item-add-form.css';


const ItemAddForm = (props) => {
  const [label, setLabel] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (!!label && isInvalid) {
      setIsInvalid(false)
    }
  }, [isInvalid, label]);


  const onSubmit = (e) => {
    e.preventDefault();
    if (label) {
      setIsInvalid(false);
      props.addItem(label);
      setLabel('');
    } else {
      setIsInvalid(true)
    }
  };

  return (
    <form className="item-add-form  d-flex" onSubmit={onSubmit}>
      <input type="text" className={`form-control ${isInvalid ? 'is-invalid ' : ''}`}
             onChange={(e) => setLabel(e.target.value)}
             placeholder="what needs to be done"
             value={label}/>
      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  )

};

const mapStateToProps = ({todoData}) => ({todoData});
const mapDispatchToProps = (dispatch) => ({
  addItem: (payload) => dispatch(actions.addTodo(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemAddForm);
