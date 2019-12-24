import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestItem = ({ title, id, selected, setSelected, deleteItem }) => {
   const selectedClass = selected ? 'selected' : '';
   console.log('render test item');
   return (
      <div className={`test-item ${selectedClass}`}>
         <span className="test-item-title">
            <FontAwesomeIcon icon="seedling" />
            {id}: {title}
         </span>
         <div className="test-item-actions">
            <button onClick={() => setSelected(id)}>add to cart</button>
            <button onClick={() => deleteItem(id)}>
               <FontAwesomeIcon icon="trash-alt" />
            </button>
         </div>
      </div>
   );
};

export default React.memo(TestItem);
