import React, {useState, useEffect} from 'react';

const Thumbnail = ({photos}) => {
  const [selectedPhoto, setSelectedPhoto] = useState();
  useEffect(() => {
    if (photos) {
      setSelectedPhoto(photos[0].url);
    }
  }, [photos]);

  return (
    <img className="big-thumbnail" src={selectedPhoto}/>
  );
}

export default Thumbnail;