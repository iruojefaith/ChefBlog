import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
  <div className="app__wrapper_info">
 <SubHeading title="Contact"/>
  <h1 className="head__cormorant" style={{ marginBottom: '3rem'}}> Find Us</h1>
  <div className="app__wrapper-content">
    <p className="p__opensans">Sed venenatis efficitur dolor, non congue est luctus eget. Proin vitae suscipit purus. </p>
    <p className="p__cormorant" style={{ color: '#dcca87', margin: '2rem 0'}}> Opening Hours</p>
    <p className="p__opensans">Mon - Fri: 10:00am - 1:00am </p>
    <p className="p__opensans">Sat - Sun: 10:00am - 3:00am </p>
  </div>
  <button className="custom__button"> Visit Us </button>
  </div>
  <div className="app__wrapper_img">
   <img src={images.findus} alt="findus" />
  </div>
  </div>
);

export default FindUs;
