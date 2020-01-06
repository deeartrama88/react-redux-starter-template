import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalModal from "../modal/LocalModal";
import BasicModal from '../modal/BasicModal';
import LoginForm from '../forms/LoginForm';
import RegistrationForm from '../forms/RegistrationForm';
import LoggedInMenu from "./LoggedInMenu";
import { login } from '../../store/actions/userActions';
import './index.scss';

const NotLogged = ({clickHandler}) => (
    <div className="login-not-logged" onClick={clickHandler}>Login</div>
);

const LoginMenu = ({ login, user}) => {
   const [isOpen, setIsOpen] = React.useState(false);
   const [localModalIsOpen, setLocalModalIsOpen] = React.useState(false);
   const handleClose = () => setIsOpen(false);
   const loginHandle = () => login();
   return (
      <div className="login">
          {user.isLogged
              ? (
                  <div className="login-menu-wrap" onClick={() => setLocalModalIsOpen(true)}>
                      <FontAwesomeIcon icon="user" />
                      <span>User</span>
                      <LocalModal isOpen={localModalIsOpen} closeHandler={() => setLocalModalIsOpen(false)}>
                          <LoggedInMenu />
                      </LocalModal>
                  </div>
                )
              : (
                  <NotLogged clickHandler={() => setIsOpen(true)} />
              )
          }
         <BasicModal isOpen={true} closeModal={handleClose}>
            <RegistrationForm callback={handleClose} submitHandler={loginHandle} />
         </BasicModal>
      </div>
   );
};

const mapPropsToState = dispatch =>
   bindActionCreators(
      {
         login
      },
      dispatch
   );

const mapStateToProps = state => ({
   user: state.userReducer
});

export default connect(
    mapStateToProps,
    mapPropsToState,
)(LoginMenu);
