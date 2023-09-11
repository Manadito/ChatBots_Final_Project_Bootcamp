import React from 'react';

const LandingContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center">
        <div className="m-auto">An image will be placed here</div>
        <div>
          <div className="flex justify-center">
            <h1> Learn from the best instructors ever!</h1>
          </div>
          <div>
            <button className="m-auto mb-4 block rounded-lg bg-blue-500 pb-2 pl-10 pr-10 pt-2">
              Start now
            </button>
            <button className="m-auto block rounded-lg bg-blue-500 pb-2 pl-10 pr-10 pt-2">
              I have an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
