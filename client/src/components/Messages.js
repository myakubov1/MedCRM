/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
import axios from 'axios';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import avatar from '../assets/avatar.svg';
import { ApiUrlProt } from '../api';

function Messages() {
  const [messages, setMessages] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAsyncMessages = async () => {
      await axios.get(`${ApiUrlProt}/messages/`, {
        params: {
          destination: jwtDecode(sessionStorage.getItem('token')).username,
        },
      })
        .then((response) => {
          setMessages(response.data);
        })
        .catch((e) => {
          setError(e);
          console.log(e);
        })
        .finally(() => {
          setLoaded(true);
        });
    };
    loadAsyncMessages();
    setLoading(false);
  }, []);

  const sendMessage = async () => {
    await axios.post(`${ApiUrlProt}/messages`, {
      author: jwtDecode(sessionStorage.getItem('token')).username,
      destination: 'AnnaMax2',
      content: 'Test Message',
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        setError(e);
        console.log(e);
      })
      .finally(() => {
        setLoaded(true);
      });
  };

  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
      <div className="h-100 bg-light rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h6 className="mb-0">Messages</h6>
          <a href="">Show All</a>
        </div>
        <div className="d-flex mb-2">
          <input
              className="form-control bg-transparent"
              type="text"
              placeholder="Enter name"
          />
          <input
              className="form-control bg-transparent"
              type="text"
              placeholder="Enter message"
          />
          <button onClick={sendMessage} type="button" className="btn btn-primary ms-2">
            Send
          </button>
        </div>
        {loaded ? messages?.map((message) => <Message key={message._id} author={message.author} content={message.content} date={message.date} />) : null}
      </div>
    </div>
  );
}

function Message({ author, content, date }) {
  return (
    <div className="d-flex align-items-center border-bottom py-3">
      <img className="rounded-circle flex-shrink-0" src={avatar} alt="" style={{ width: '40px', height: '40px' }} />
      <div className="w-100 ms-3">
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-0">{author}</h6>
          <small>{date}</small>
        </div>
        <span>{content}</span>
      </div>
    </div>
  );
}
export default Messages;
