import React, { useState } from 'react';
import axios from 'axios';

const ChatbotApp = () => {
  const [prompt, setPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post('http://localhost:8080/generate-text', {
        prompt,
        type: 'literature', // we specify the chatbot type here
      });

      console.log('Server response:', JSON.stringify(result.data, null, 2)); // Log full server response

      // Check if the expected fields exist
      if (
        result.data &&
        result.data.choices &&
        result.data.choices[0] &&
        result.data.choices[0].message
      ) {
        setApiResponse(result.data.choices[0].message.content);
      } else {
        setApiResponse('Unexpected response format from server.');
      }
    } catch (e) {
      console.error(e);
      setApiResponse('Something is going wrong, Please try again.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Chat with GPT-3</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Ask a question:</label>
        <input
          type="text"
          id="question"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Ask'}
        </button>
      </form>
      {apiResponse && (
        <div>
          <strong>Response:</strong>
          <p>{apiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default ChatbotApp;
