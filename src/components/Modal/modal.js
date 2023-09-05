// import { GalleryItemsImg, GalleryModal, ModalImage } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
// import { Component } from 'react';
// import Modal from 'react-modal';

// const  customStyles  =  { 
//     content : { 
//       top: '50%', 
//       left: '50%', 
//       right: 'auto', 
//       bottom: 'auto', 
//       marginRight: '-50%', 
//       transform: 'translate(-50%, -50%)', 
//     } , 
//   } ;

//   Modal.setAppElement('#root');

//   export class WindowModal extends Component {
//     state = {
//         modalIsOpen: false,
//       };

//       openModal = () => {
//         this.setState({ modalIsOpen: true });
//       };
    
//       closeModal = () => {
//         this.setState({ modalIsOpen: false });
//       };

//       render() {
//     const { webformatURL, largeImageURL, tag } = this.props;
//         return(
//            <GalleryModal>
//               <GalleryItemsImg src={webformatURL} alt={tag} loading="lazy"
//                    onClick={() => this.openModal}/>
// {/* 
//                <Modal isOpen={this.modalIsOpen} onRequestClose={() => this.closeModal()} 
//                       style={customStyles} contentLabel="Minimal Modal Example"/> */}

//                {/* <ModalImage src={largeImageURL} alt={tag}/>  */}
//            </GalleryModal>
//         )
//       }
//   }
