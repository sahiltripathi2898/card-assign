import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const [users, setuser] = useState(null);
  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/');
    console.log(response.data);
    setuser(response.data);
  };
  const history = useHistory();

  const routeChange = () => {
    let path = `add`;
    history.push(path);
  };
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          padding: '30px',
          backgroundColor: 'whitesmoke',
        }}
      >
        Assignment
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <Button onClick={fetchData} variant="info" style={{ margin: 'auto' }}>
          Get List of Startups
        </Button>{' '}
      </div>
      <div>
        {users &&
          users.map((user, index) => {
            return (
              <Card border="info" style={{ margin: 'auto', width: '50%' }}>
                <Card.Body>
                  <Card.Text>{index + 1} :</Card.Text>
                  <Card.Title>Name : {user.name}</Card.Title>
                  <Card.Text> Country : {user.country}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '30px',
        }}
      >
        <Button onClick={routeChange} variant="dark">
          Create New
        </Button>{' '}
      </div>
    </div>
  );
}
