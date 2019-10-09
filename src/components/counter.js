import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/actions/counterActions';

const Counter = ({ counter, increment, decrement }) => {
   return (
      <div className="counter">
         counter {counter.value}
         <button onClick={increment}>increment</button>
         <button onClick={decrement}>decrement</button>
      </div>
   );
};

const mapPropsToState = dispatch =>
   bindActionCreators(
      {
         increment,
         decrement
      },
      dispatch
   );

const mapStateToProps = state => ({
   counter: state.counterReducer
});

export default connect(
   mapStateToProps,
   mapPropsToState
)(Counter);
