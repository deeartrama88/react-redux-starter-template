import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import BasicForm from '../forms/basic';
import './index.scss';

const LoginMenu = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const toggleModal = val => setIsOpen(val ? val : !isOpen);
   const customStyles = {
      content: {
         width: '50%',
         height: '50%',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
         margin: 'auto'
      }
   };
   return (
      <div className="login">
         <FontAwesomeIcon icon="user" />
         <span className="text" onClick={toggleModal}>
            Login
         </span>
         <Modal
            overlayClassName="modalDefaultOverlay"
            style={customStyles}
            isOpen={isOpen}
         >
            <BasicForm />
         </Modal>
      </div>
   );
};

export default LoginMenu;
