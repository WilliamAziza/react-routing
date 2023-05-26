import React, { useState } from 'react';
import { images } from './images';
import { Form, Button, Col, Container } from 'react-bootstrap';

const Contacts = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('User ID:', userId);
    console.log('Password:', password);
    console.log('Is Checked:', isChecked);
    
    setUserId('');
    setPassword('');
    setIsChecked(false);
    
    setIsBooked(true);
  };

  return (
    <>
      <h1 className='real'>
        Book A Seasonal Ticket{' '}
        <span>
          <img src={images.madrid} alt='' height='70px' />
        </span>
      </h1>
      <Container>
        <Col md='4'>
          {isBooked ? (
            <div className='message'>Booked for me!</div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter User ID'
                  value={userId}
                  onChange={(event) => setUserId(event.target.value)}
                />
                <Form.Text className='text-muted'>
                  We'll never share your user identification with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                  type='checkbox'
                  label='Check me out'
                  checked={isChecked}
                  onChange={(event) => setIsChecked(event.target.checked)}
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          )}
        </Col>
      </Container>
    </>
  );
};

export default Contacts;
