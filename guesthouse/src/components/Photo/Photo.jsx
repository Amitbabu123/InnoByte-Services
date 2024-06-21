import React from 'react';
import Out from '../../assets/out.jpg'; // Importing the image
import AyoDhya from '../../assets/ayodhya.webp'; // Importing the image
import Large from '../../assets/large.jpg'; // Importing the image
import Palash from '../../assets/palash.webp'; // Importing the image
import Small from '../../assets/small.jpg'; // Importing the image
import Baranti from '../../assets/baranti.webp'; // Importing the image
import Recep from '../../assets/recep.jpg'; // Importing the image
import Flower from '../../assets/flower.jpg'; // Importing the image
import Room from '../../assets/room1.jpg'; // Importing the image
import MithonDam from '../../assets/mithonDam.webp'; // Importing the image

const Photo = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="box11">
          <img className="w-full h-full object-cover" src={Out} alt="Out" />
        </div>
        <div className="box11">
          <img className="w-full h-full object-cover" src={AyoDhya} alt="AyoDhya" />
        </div>
        <div className="box11">
          <img className="w-full h-full object-cover" src={Large} alt="Large" />
        </div>
        <div className="box11">
          <img className="w-full h-full object-cover" src={Palash} alt="Palash" />
        </div>
        <div className="box11">
          <img className="w-full h-full object-cover" src={Small} alt="Small" />
        </div>
        <div className="box11">
          <img className="w-full h-full object-cover" src={Baranti} alt="Baranti" />
        </div>
        <div className="box11">
          <img className="w-full h-full object-cover" src={Recep} alt="Recep" />
        </div>
        <div className="box11">
          <img className="w-full h-full object-cover" src={Flower} alt="Flower" />
        </div>
        <div className="box11">
          <img className="w-full h-full object-cover" src={Room} alt="Room" />
        </div>
        <div className="box11">
          <img className="w-full h-full object-cover" src={MithonDam} alt="MithonDam" />
        </div>
      </div>
    </div>
  );
};

export default Photo;
