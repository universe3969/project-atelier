import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import { BsStarFill, BsStar} from 'react-icons/bs';
import PhotoReview from './PhotoReview.jsx';


const AddReviewForm = ({setShowReviewModal, reviewMetaData, setRerender, productName, productReviews}) => {
  console.log(productReviews);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [photos, setPhotos] = useState('');
  const [characteristics, setCharacteristice] = useState({});
  const [content, setContent] = useState('');
  const [starNum, setStarNum] = useState(0);

  let handleStarClick = (e) => {
    e.preventDefault();
    let num = e.target.getAttribute('num');
    setStarsNum(parseInt(num) + 1);
    let data = [...stars];
    for (let i = 0; i <= num; i++) {
      data[i] = <button num={i} key={i} onClick={handleStarClick} className="starButton"><BsStarFill/></button>;
    }
    for (let i = 4; i > num; i--) {
      data[i] = <button num={i} key={i} onClick={handleStarClick} className="starButton"><BsStar/></button>;
    }
    setStars(data);
  };
  let [stars, setStars] = useState(
    [
      <button num="0" key={0} onClick={handleStarClick} className="starButton"><BsStarFill/></button>,
      <button num="1" key={1} onClick={handleStarClick} className="starButton"><BsStar/></button>,
      <button num="2" key={2} onClick={handleStarClick} className="starButton"><BsStar/></button>,
      <button num="3" key={3} onClick={handleStarClick} className="starButton"><BsStar/></button>,
      <button num="4" key={4} onClick={handleStarClick} className="starButton"><BsStar/></button>
    ]);
  const handleSubmit = (e) => {
    axios.post ('http://localhost:3000/reviews', {
      postData: {
        rating: starsNum,
        summary: title,
        body: content,
        recommend: recommend,
        name: name,
        email: email,
        photos: photos,
        characteristics: characteristics
      }
    })
      .then (res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  return (
    <form className="write-review">
      <div className="write-top">
        <div className="write-review-stars">
          {stars}
        </div>
        <div className="name-email">
          <input type="text" className="writeName" placeholder="Name" onChange={e => { setName(e.target.value); }}></input>
          <input type="text" className="writeEmail" placeholder="Email" onChange={e => { setEmail(e.target.value); }}></input>
        </div>
      </div>
      <div className="summary">
        <input type="text" className="review-summary" placeholder="Short and sweet" onChange={e => { setSummary(e.target.value); }}></input>
        <span>
          Recommend?
          <input type="checkbox" id="recommend" name="recommend" value="recommend" onChange={e => setRecommend(e.target.checked)}></input>
        </span>
      </div>
      <textarea rows="rows" className="review-content" placeholder="Any thoughts on this product.." onChange={e => { setContent(e.target.value); }}></textarea>
      <div className="bottom">
        <PhotoReview photos={photos} setPhotos={setPhotos} />
        <input type="submit" className="submit-review" value="Submit" onClick={handleSubmit} ></input>
      </div>
    </form>
  );
};

export default AddReviewForm;