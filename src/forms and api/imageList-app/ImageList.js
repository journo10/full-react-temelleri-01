import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <div key={image.id} className="ui grid container">
        <div className="four wide column">
          <div className="ui small image">
            <img src={image.webformatURL} alt="" />
          </div>
        </div>
      </div>
    );
  });

  return <div className="image">{images}</div>;
};

export default ImageList;

//NOT => key propsunu sadece return ettiğimiz kök elemente(root) atıyoruz unutma.
//Aşağıdaki gibi
//<div key = {image.id}>return <img src={image.webformatURL} alt="" /></div>
