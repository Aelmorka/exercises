import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

export default function App() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });
    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    const myImage = cld.image('cld-sample-4'); 

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage.resize(fill().width(250).height(250));
  
    // Render the image in a React component.
    return (
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
    )
};