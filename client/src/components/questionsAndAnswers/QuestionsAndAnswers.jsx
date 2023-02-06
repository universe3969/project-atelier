import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import SearchBar from '../reusableComponents/SearchBar.jsx';
import Button from '../reusableComponents/Button.jsx';
import Modal from '../reusableComponents/Modal.jsx';
import Form from './Form.jsx';
import './QuestionsAndAnswers.scss';


const QuestionsAndAnswers = ({ productId, productName }) => {
  const [questions, setQuestions] = useState(null);
  const [loadedQuestionsCount, setLoadedQuestionsCount] = useState(2);
  const [loadMoreQuestions, setLoadMoreQuestions] = useState(true);
  const [searchQuestions, setSearchQuestions] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/questionsAndAnswers/${productId}`)
      .then(({ data }) => {
        setQuestions(data);
        setSearchQuestions(data);
      });
  }, []);

  let renderedQuestions = null;
  if (searchQuestions) {
    renderedQuestions = searchQuestions
      .slice(0, loadedQuestionsCount)
      .map(question =>
        <Question key={question.question_id} question={question} productName={productName}/>
      );
  }

  const handleSearchQuestions = (searchTerm) => {
    console.log(searchTerm);
    if (searchTerm === '') {
      setSearchQuestions(questions);
    } else {
      const searchResults = questions.filter(question => {
        if (question.question_body.match(new RegExp(searchTerm, 'i'))) {
          return question;
        }
      });
      if (searchResults.length) {
        setSearchQuestions(searchResults);
      } else {
        setSearchQuestions(null);
      }
    }
  };

  const handleLoadMoreQuestions = () => {
    if (loadMoreQuestions) {
      setLoadedQuestionsCount(prev => prev + 2);
      if (loadedQuestionsCount + 2 >= questions.length) {
        setLoadMoreQuestions(false);
      }
      if (loadMoreQuestions + 2 >= 4) {
        document.querySelector('.answer-content').style.overflowY = 'scroll';
      }
    } else {
      setLoadedQuestionsCount(2);
      setLoadMoreQuestions(true);
      document.querySelector('.answer-content').style.overflowY = 'hidden';
    }
  };

  const handleSubmitQuestion = (questionPost) => {
    console.log(questionPost);
    const questionData = {
      product_id: +productId,
      ...questionPost
    };
    axios.post('http://localhost:3000/api/questions/new', questionData)
      .then(data => data)
      .catch(err => console.log(data));
    setShowModal(false);
  };

  return (
    <div className='questions-and-answers'>
      <h3>QUESTIONS &amp; ANSWERS</h3>
      <SearchBar
        className='questions-searchbar'
        placeholderText='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onSearch={handleSearchQuestions}
        searchByKey={true}
      />
      {searchQuestions ? renderedQuestions : <div className='search-notice'>No Questions Found</div>}
      <div className='question-buttons'>
        {searchQuestions && searchQuestions.length > 2 &&
          <Button
            className='secondary more-question'
            onClick={handleLoadMoreQuestions}
          >
            {loadMoreQuestions ? 'MORE ANSWERED QUESTIONS' : 'COLLAPSE ANSWERED QUESTIONS'}
          </Button>
        }
        <Button
          className='secondary add-question'
          onClick={() => setShowModal(true)}
        >
          ADD A QUESTIONS  +
        </Button>
      </div>
      {showModal &&
        <Modal
          className='modal blur'
          onClose={() => setShowModal(false)}
        >
          <Form
            type='question'
            title='Ask Your Question'
            subtitle={`About the ${productName}`}
            onSubmit={handleSubmitQuestion}
          />
        </Modal>
      }
    </div>
  );
};


export default QuestionsAndAnswers;

