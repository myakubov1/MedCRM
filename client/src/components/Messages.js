/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
import axios from 'axios';
import { useState, useEffect } from 'react';
import avatar from '../assets/avatar.svg';
import { ApiUrl } from '../api';

function Messages() {
  const [messages, setMessages] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAsyncMessages = async () => {
      await axios.get(`${ApiUrl}/messages`)
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

  return (
    <div className="col-sm-12 col-md-6 col-xl-4">
      <div className="h-100 bg-light rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h6 className="mb-0">Messages</h6>
          <a href="">Show All</a>
        </div>
        {loaded ? messages.map((message) => <Message key={message._id} author={message.author} content={message.content} date={message.date} />) : null}
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
