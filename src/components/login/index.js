import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BasicModal from '../modal/BasicModal';
import BasicForm from '../forms/basic';
import './index.scss';

const LoginMenu = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const toggleModal = () => setIsOpen(!isOpen);
   const handleClose = () => {
      // custom close modal action here
      setIsOpen(false);
   };
   return (
      <div className="login">
         <FontAwesomeIcon icon="user" />
         <span className="text" onClick={toggleModal}>
            Login 2
         </span>
         <BasicModal isOpen={isOpen} closeModal={handleClose}>
            <BasicForm />
         </BasicModal>
      </div>
   );
};

export default LoginMenu;
