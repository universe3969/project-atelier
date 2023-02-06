import React, { useState } from 'react';
import './Form.scss';
import Button from '../reusableComponents/Button.jsx';

const Form = ({ type, title, subtitle, onSubmit }) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  let placeholderNameText, placeholderEmailText;
  if (type === 'question') {
    placeholderNameText = 'Example: jackson11!';
    placeholderEmailText = 'Why did you like the product or not?';
  } else {
    placeholderNameText = 'Example: jack543!';
    placeholderEmailText = 'Example: jack@email.com';
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validBody = body.trim().length >= 5 && body.trim().length <= 1000;
    const validName = name.trim().length >= 2 && name.trim().length <= 60;
    const validEmail = email.trim().length >= 3 && name.trim().length <= 60 && email.includes('@');

    if (validBody && validName && validEmail) {
      const questionPost = { name, email, body };
      onSubmit(questionPost);
    }
  };

  return (
    <form>
      <header>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </header>
      <div className='form-name'>
        <label>What is your nickname?</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholderNameText}
        />
        <p>For privacy reasons, do not use your full name or email address</p>
      </div>
      <div className='form-email'>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholderEmailText}
        />
        <p>For authentication reasons, you will not be emailed</p>
      </div>
      <div className='form-body'>
        <label>{type === 'question' ? 'Your Question' : 'Your Answer'}</label>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></textarea>
      </div>
      <Button className='primary' onClick={handleSubmit}>
        SUBMIT
      </Button>
    </form>
  );
};

export default Form;