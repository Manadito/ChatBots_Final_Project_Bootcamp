import React, { useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext.context';

const InstructorBot = () => {
  const { instructor } = useAppContext();
  const [prompt, setPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Determining the background class and image src based on the current value of the 'instructor' state
  let bgClass, imgSrc; // initializing variables for background class and src

  if (instructor === 'science') {
    bgClass = 'bg-classroomOne';
    imgSrc = '/img/Vinci_Instructor.png';
  } else if (instructor === 'mathematics') {
    bgClass = 'bg-classroomTwo';
    imgSrc = '/img/Einie_Instructor.png';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post('http://localhost:8080/generate-text', {
        prompt,
        type: instructor, // we specify the chatbot type here
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
    <div className="relative m-auto rounded-xl border-8 border-red-500 bg-red-500 md:h-[432px] md:w-[720px] xl:h-[720px] xl:w-[1280px]">
      <div className={`${bgClass} absolute h-full w-full rounded-xl bg-cover`}>
        <div className="h-1/6">
          <h1>Chat with GPT-3</h1>
        </div>
        <div className="flex h-5/6">
          <div className="grid w-4/6 grid-rows-2">
            <div className="flex justify-center">
              <div className="w-4/5 rounded-lg border-4 border-red-500 bg-white p-10">
                {apiResponse && (
                  <div>
                    <strong>Response:</strong>
                    <p>{apiResponse}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <form
                className="flex h-3/5 w-4/5 items-center justify-center rounded-lg border-4 bg-white"
                onSubmit={handleSubmit}
              >
                <input
                  className="h-3/5 w-4/5"
                  type="text"
                  id="question"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <button className="" type="submit" disabled={loading}>
                  {loading ? (
                    'Loading...'
                  ) : (
                    <img
                      className="h-14 w-14"
                      src="/img/Raise_Hand_Icon.png"
                      alt="Raise Hand Icon"
                    />
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="flex w-2/6 overflow-hidden">
            <img
              className="mt-32 h-full w-full scale-150 object-cover object-center"
              src={imgSrc}
              alt="Selected Instructor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorBot;
