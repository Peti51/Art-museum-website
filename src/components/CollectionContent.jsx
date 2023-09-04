import React from 'react';
import '../styles/Main.scss';
import collectionImage1 from '../images/Collection-picture-1.png';
import collectionImage2 from '../images/Collection-picture-2.png';
import collectionImage3 from '../images/Collection-picture-3.png';
import collectionImage4 from '../images/Collection-picture-4.png';
import collectionImage5 from '../images/Collection-picture-5.png';
import collectionImage6 from '../images/Collection-picture-6.png';

const images = [
  {
    description: 'DECORATIVE ARTS & CRAFTS',
    imgURL: collectionImage1
  },
  {
    description: 'AMERICAN IMPRESSIONISM',
    imgURL: collectionImage2
  },
  {
    description: 'DE STIJL',
    imgURL: collectionImage3
  },
  {
    description: 'CUBISM',
    imgURL: collectionImage4
  },
  {
    description: 'AMERICAN',
    imgURL: collectionImage5
  },
  {
    description: 'GREEK ANTIQUITIES',
    imgURL: collectionImage6
  },
];

export const CollectionContent = () => {
  return (
    <div className="content">
      <div className="content-grid-container">
        {images.map((item) => (
          <div key={item.description} className="content-item">
            <img
              className="content-image"
              src={item.imgURL}
              alt={item.description}
            />
            <div className="content-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};