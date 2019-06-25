import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/reducers/todo/actions';
import './item-add-form.css';


const ItemAddForm = (props) => {
  const [label, setLabel] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);


  const handleChangeLabel = (e) => {
    setLabel(e.target.value);
  };

  useEffect(() => {
    if (!!label && isInvalid) {
      setIsInvalid(false)
    }
  },[label, isInvalid]);


  const onSubmit = (e) => {
    e.preventDefault();
    if (label) {
      props.addItem(label);
      setLabel('');
      setIsInvalid(false)
    } else {
      setIsInvalid(true);
    }
  };

  return (
    <form className="item-add-form  d-flex" onSubmit={onSubmit}>

      <input type="text" className={isInvalid ? 'is-invalid form-control': 'form-control'}
             onChange={handleChangeLabel}
             placeholder="what needs to be done"

      />
      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  )

};

const mapStateToProps = ({todoData}) => ({todoData});
const mapDispatchToProps = (dispatch) => ({
  addItem: (payload) => dispatch(actions.addTodo(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemAddForm);
