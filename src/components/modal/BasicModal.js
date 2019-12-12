import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BasicModal = ({ isOpen, closeModal, children }) => {
   const customStyles = {
      content: {
         width: '50%',
         height: '50%',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
         margin: 'auto'
      }
   };
   return (
      <Modal
         overlayClassName="modalDefaultOverlay"
         style={customStyles}
         isOpen={isOpen}
         shouldCloseOnOverlayClick={true}
         onRequestClose={closeModal}
         ariaHideApp={false}
      >
         <div className="close" onClick={closeModal}>
            <FontAwesomeIcon icon="times" />
         </div>
         {children}
      </Modal>
   );
};

export default BasicModal;
