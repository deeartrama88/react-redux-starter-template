import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BasicModal from '../modal/BasicModal';
import LoginForm from '../forms/LoginForm';
import { login } from '../../store/actions/userActions';
import './index.scss';

const NotLogged = ({clickHandler}) => (
    <div className="login-not-logged" onClick={clickHandler}>Login</div>
);

const LoginMenu = ({ login, user}) => {
   const [isOpen, setIsOpen] = React.useState(false);
   const toggleModal = () => setIsOpen(!isOpen);
   const handleClose = () => {
      setIsOpen(false);
   };
   const loginHandle = () => {
       login().then(res => {
           console.log(res);
       });
   };
   return (
      <div className="login">
          {user.isLogged
              ? (
                  <div>
                      <FontAwesomeIcon icon="user" />
                      <div>User</div>
                  </div>
                )
              : (
                  <NotLogged clickHandler={() => setIsOpen(true)} />
              )
          }
         <BasicModal isOpen={isOpen} closeModal={handleClose}>
            <LoginForm submitHandler={loginHandle} />
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
