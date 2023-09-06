import { ModalGalleryImg, ModalImageIsOpen } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px'
  },
};

export class ModalWindow extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { webformatURL, largeImageURL, tag } = this.props;

    return (
      <div className="overlay">
        <ModalGalleryImg
          src={webformatURL}
          alt={tag}
          loading="lazy"
          onClick={() => this.openModal()}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          style={customStyles}
          contentLabel="Minimal Modal Example"
        >
          <ModalImageIsOpen src={largeImageURL} alt={tag} />
        </Modal>
      </div>
    );
  }
}
