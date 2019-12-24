import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BasicModal from '../modal/BasicModal';
import BasicForm from '../forms/basic';
import { login, test } from '../../store/actions/userActions';
import './index.scss';

const LoginMenu = ({ login }) => {
   const [isOpen, setIsOpen] = React.useState(false);
   const toggleModal = () => setIsOpen(!isOpen);
   const handleClose = () => {
      // custom close modal action here
      setIsOpen(false);
   };
   const loginHandle = () => {
      login();
   };
   return (
      <div className="login">
         <FontAwesomeIcon icon="user" />
         <span className="text" onClick={toggleModal}>
            Login
         </span>
         <BasicModal isOpen={isOpen} closeModal={handleClose}>
            <BasicForm submitHandler={loginHandle} />
         </BasicModal>
      </div>
   );
};

const mapPropsToState = dispatch =>
   bindActionCreators(
      {
         test,
         login
      },
      dispatch
   );

export default connect(
   mapPropsToState,
   null
)(LoginMenu);
