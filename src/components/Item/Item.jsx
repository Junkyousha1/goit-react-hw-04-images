import React from 'react';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

const Item = ({ id, smallImgURL }) => {
  return (
    <li className={styles.Item}>
      <img src={smallImgURL} alt={id} />
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};
export default Item;


