import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import SearchBar from '../reusableComponents/SearchBar.jsx';
import Button from '../reusableComponents/Button.jsx';
import './QuestionsAndAnswers.scss';


const QuestionsAndAnswers = ({ productId }) => {
  const [questions, setQuestions] = useState(null);
  const [loadedQuestions, setLoadedQuestions] = useState(4);
  const [searchQuestions, setSearchQuestions] = useState(null);

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
      .slice(0, loadedQuestions)
      .map(question =>
        <Question key={question.question_id} question={question}/>
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
        <Button className='secondary more-question'>
          MORE ANSWERED QUESTIONS
        </Button>
        <Button className='secondary add-question'>
          ADD A QUESTIONS  +
        </Button>
      </div>
    </div>
  );
};


export default QuestionsAndAnswers;

