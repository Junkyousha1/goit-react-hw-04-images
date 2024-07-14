import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.css';
import Item from 'components/Item/Item';
import Modal from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [bigPic, setBigPic] = useState(null);

  useEffect(() => {
    const handleClick = e => {
      if (e.target.nodeName !== 'IMG') {
        setShowModal(false);
        return;
      } else {
        const picture = images.find(
          obj => obj.id === parseInt(e.target.alt, 10)
        );
        if (picture) {
          setBigPic(picture.largeImageURL);
          setShowModal(true);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [images]);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <ul className={styles.gallery}>
        {images.map(img => (
          <Item key={nanoid()} smallImgURL={img.webformatURL} id={img.id} />
        ))}
      </ul>
      {showModal && bigPic && <Modal onClose={toggleModal} pic={bigPic} />}
    </>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default Gallery;
