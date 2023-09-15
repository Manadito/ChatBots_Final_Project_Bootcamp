import React from 'react';

const LandingContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center pl-32 pr-32">
        <div className="mt-10 flex items-center justify-center">
          <img className="w-[500px]" src="/img/Time_Machine_Cover.png" alt="" />{' '}
        </div>

        <div>
          <div className="mt-50 flex h-20 justify-center">
            <h1 className=" font-futurettex text-4xl font-bold">
              {' '}
              Learn from the best instructors ever!
            </h1>
          </div>
          <div className="grid grid-rows-2">
            <button className="m-auto mb-4 block w-6/12 rounded-lg bg-cyan-400 pb-2 pl-10 pr-10 pt-2 font-bold text-white hover:bg-cyan-300">
              START THE MACHINE
            </button>
            <button className="m-auto block w-6/12 rounded-lg bg-cyan-400 pb-2 pl-10 pr-10 pt-2 font-bold text-white hover:bg-cyan-300">
              I HAVE TRAVELLED IN TIME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
