import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import { BsStarFill, BsStar} from 'react-icons/bs';
import PhotoReview from './PhotoReview.jsx';
import Characteristics from './Characteristics.jsx';
import StarRating from '../../reusableComponents/StarRating.jsx';
import './AddReviewForm.scss';


const AddReviewForm = ({setShowReviewModal, onClose, reviewMetaData, setRender, productName, productReviews}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [photos, setPhotos] = useState('');
  const [characteristics, setCharacteristics] = useState({});
  const [content, setContent] = useState('');
  const [starNum, setStarNum] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);


  const handleCharClick = (num, id) => {
    setCharacteristics({ ...characteristics, [id]: num });
  };

  let sizeSelections = ['way too small', 'too small', 'Perfect', 'too big', 'way too big'];
  let widthSelections = ['way too narrow', 'too narrow', 'Perfect', 'too wide', 'way too wide'];
  let comfortSelections = ['Uncomfortable', 'a bit uncomfortable', 'Average', 'Comfortable', 'Perfect'];
  let qualitySelections = ['Poor', 'Below average', 'What I expected', 'good', 'Perfect'];
  let lengthSelections = ['way too short', 'a bit short', 'Perfect', 'a bit long', 'way too long'];
  let fitSelections = ['way too tight', 'a bit tight', 'Perfect', 'a bit loose', 'Rway too loose'];

  const characteristicsForm = useMemo(() => {
    const currentChar = Object.keys(reviewMetaData.characteristics);
    return currentChar.map((char) => {
      const currentKey = reviewMetaData.characteristics[char].id;
      let currCharForm;
      if (char === 'Size') {
        currCharForm = <Characteristics key={currentKey} handleChange={handleCharClick} selectionNames={sizeSelections} charType="Size" charID={currentKey} />;
      } else if (char === 'Comfort') {
        currCharForm = <Characteristics key={currentKey} handleChange={handleCharClick} selectionNames={comfortSelections} charType="Comfort" charID={currentKey} />;
      } else if (char === 'Width') {
        currCharForm = <Characteristics key={currentKey} handleChange={handleCharClick} selectionNames={widthSelections} charType="Width" charID={currentKey} />;
      } else if (char === 'Quality') {
        currCharForm = <Characteristics key={currentKey} handleChange={handleCharClick} selectionNames={qualitySelections} charType="Quality" charID={currentKey} />;
      } else if (char === 'Length') {
        currCharForm = <Characteristics key={currentKey} handleChange={handleCharClick} selectionNames={lengthSelections} charType="Length" charID={currentKey} />;
      } else if (char === 'Fit') {
        currCharForm = <Characteristics key={currentKey} handleChange={handleCharClick} selectionNames={fitSelections} charType="Fit" charID={currentKey} />;
      }

      return currCharForm;
    });
  }, [reviewMetaData]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 50 || !starNum) {
      setShowErrorMessage(true);
    } else {
      axios.post ('http://localhost:3000/api/reviews/new', {
        product_id: Number(reviewMetaData.product_id),
        rating: starNum,
        summary: summary,
        body: content,
        recommend: recommend,
        name: name,
        email: email,
        photos: photos,
        characteristics: characteristics
      })
        .then (res => {
          console.log(res);
          onClose();
        })
        .catch(err => console.log(err));
      onClose();
    }
  };

  return (

    <form className="write-review">
      <div className="write-top">
        <h1>Write Your Review</h1>
        <div className="write-review-stars">
          <div>Rate this product *</div>
          {/* <div>{stars}</div> */}
          <StarRating rating='0' onRating={(r) => setStarNum(r)}/>
        </div>
        <div className="name-email" >
          <input type="text" className="name" placeholder="Name" onChange={e => { setName(e.target.value); }}></input>
          <input type="text" className="email" placeholder="Email" onChange={e => { setEmail(e.target.value); }}></input>
        </div>
      </div>
      <div className="summary">
        <input type="text" className="review-summary" placeholder="Short and sweet" onChange={e => { setSummary(e.target.value); }}></input>
      </div>
      <textarea rows="rows" required='required' minLength='50' maxLenght='1100'className="review-content" placeholder="Any thoughts on this product.." onChange={e => { setContent(e.target.value); }} />
      <div className='content-warning'>{content.length <= 50 ? `[${50 - content.length}] require to reach minimum limit` : 'Minimum limit reached'}</div>
      <div className="photo-container">
        <div>You can upload 5 max photos</div>
        {photos.length < 5 ? ( <PhotoReview photos={photos} setPhotos={setPhotos} />) : null}
        <div className='recommend'>
          <div> Recommend? *</div>
          <div className='recommend-selection'>
            <label >
              <span>Yes:</span>
              <div>
                <input required type="radio" name="recommend" onChange={() => setRecommend(true)} />
              </div>
            </label>
            <label>
              <span>No:</span>
              <div>
                <input type="radio" name="recommend" onChange={() => setRecommend(false)} />
              </div>
            </label>
          </div>
          <div className="char-container">
            <div>Select Characteristics *</div>
            <div className="char-forms">
              {characteristicsForm}
            </div>
          </div>
          <br />

          <div>{showErrorMessage ? 'There was an error' : null}</div>
        </div>
      </div>
      <button type="submit" className="submit-review" onClick={handleSubmit}>Submit</button>
    </form>

  );
};

export default AddReviewForm;