import { useState } from "react";

export default function Gallery(props) {
  const [isOpened, setIsOpened] = useState(false);
  const [openedImg, setOpenedImg] = useState("");

  const getImage = (imageSrc) => {
    setOpenedImg(imageSrc);
    setIsOpened(true);
  };

  return (
    <>
      <div className={isOpened ? "model opened" : "model"}>
        <img src={openedImg} alt="Currently opened image" />
        <div className="close-icon" onClick={() => setIsOpened(false)}>x</div>
      </div>
      <div className="gallery">
        {props.images.map((item, index) => {
          return (
            <div
              className="photo"
              onClick={() => getImage(item)}
              key={index}
            >
              <img src={item}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
