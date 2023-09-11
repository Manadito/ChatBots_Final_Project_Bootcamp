import React from 'react';
import EinieCard from '../../assets/images/Einie.jpg'; // Make sure to have two levels like so: "../../"
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.context';

const InstructorCards = () => {
  const { setInstructor } = useAppContext();

  const handleMathematicsCardClick = () => {
    setInstructor('mathematics'); // This sets the selected instructor when a card is clicked
  };

  const handleLiteratureCardClick = () => {
    setInstructor('literature'); // This sets the selected instructor when a card is clicked
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        <div className="rounded-lg bg-blue-500">
          <Link to="/classroom/" onClick={() => handleMathematicsCardClick()}>
            <img
              className="rounded-lg border-4 border-red-400 mix-blend-overlay"
              src={EinieCard}
              alt="einie_card"
            />
          </Link>
        </div>
        <div>
          {' '}
          <Link to="/classroom/" onClick={() => handleLiteratureCardClick()}>
            <img
              className="rounded-lg border-4 border-red-400"
              src={EinieCard}
              alt="einie_card"
            />
          </Link>
        </div>
        <div>
          {' '}
          <img
            className="rounded-lg border-4 border-red-400"
            src={EinieCard}
            alt="einie_card"
          />
        </div>
        <div>
          {' '}
          <img
            className="rounded-lg border-4 border-red-400"
            src={EinieCard}
            alt="einie_card"
          />
        </div>
        <div className="box relative h-[200] w-[200] overflow-hidden rounded-lg bg-white"></div>
      </div>
    </div>
  );
};

export default InstructorCards;
