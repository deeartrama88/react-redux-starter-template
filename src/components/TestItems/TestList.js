import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TestItem from './TestItem';
// eslint-disable-next-line import/named
import getTestItems, {
   setSelected,
   deleteItem
} from '../../store/actions/testItems';

const TestList = ({ deleteItem, list, getTestItems, setSelected }) => {
   useEffect(() => {
      getTestItems();
   }, []);

   return (
      <div className="test-list">
         {list.map(item => {
            return (
               <TestItem
                  deleteItem={deleteItem}
                  setSelected={setSelected}
                  selected={item.selected}
                  title={item.title}
                  id={item.id}
                  key={item.id}
               />
            );
         })}
      </div>
   );
};

const mapStateToProps = state => ({
   list: state.testItemsReducer.items
});

const mapDispatchToProps = dispatch =>
   bindActionCreators(
      {
         getTestItems,
         setSelected,
         deleteItem
      },
      dispatch
   );
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(TestList);
