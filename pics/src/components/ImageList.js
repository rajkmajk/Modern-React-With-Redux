import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';

const ImageList = (props) => {
    //we are asigning the key to the root element
    //if there was a div wraping an img tag, we'd put a key there
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>
}

export default ImageList;