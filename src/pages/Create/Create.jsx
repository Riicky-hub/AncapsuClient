import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../../globalStyles';
import News from '../../api/News';

const Login = () => {
  const navigate = useNavigate();
  const [objCreated, setObjCreated] = useState({
    title: '',
    content: '',
    creator: '',
    imageUrl: '',
    categoryId: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [errors, setErros] = useState(false);
  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
    const { name, value } = event.target;
    setObjCreated({
      ...objCreated,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (objCreated.title == '' || objCreated.content == '' || objCreated.creator == '') {
      setErros(true);
    }
    if (!errors) {
      News.createNews(objCreated);
      navigate('/');
    }
  };
  return (
    <Container>
      <form autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
        <h2>Login Form</h2>
        <label>Title: </label>
        <input onChange={(e) => handleChange(e)} required type='text' name='title' />
        <br />
        <label>Content: </label>
        <input onChange={(e) => handleChange(e)} required type='text' name='content' />
        <br />
        <label>Creator: </label>
        <input onChange={(e) => handleChange(e)} required type='text' name='creator' />
        <br />
        <label>Category: </label>
        <input onChange={(e) => handleChange(e)} required type='number' name='categoryId' />
        <br />
        <input name='imageUrl' type='file' onChange={(e) => handleChange(e)} className='filetype' />
        <img alt='preview image' src={previewImage} />
        <button type='submit'>criar</button>
      </form>
      <small>
        Need an account? <Link to='/'>Register here</Link>
      </small>
    </Container>
  );
};

export default Login;
