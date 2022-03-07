import React from "react";

const ImageList = (props) => {
    //we are asigning the key to the root element
    //if there was a div wraping an img tag, we'd put a key there
   const images = props.images.map((image) => {
        return <img alt={image.description} key={image.id} src={image.urls.regular} />
    });

    return <div>{images}</div>
}

export default ImageList;