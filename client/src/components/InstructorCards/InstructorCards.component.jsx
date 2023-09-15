// React hook and library imports
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.context';

// Asset image imports
import EinieCard from '../../assets/images/Einie_Card.jpg'; // Make sure to have two levels like so: "../../"
import CleoCard from '../../assets/images/Cleo_Card.jpg';
import VinciCard from '../../assets/images/Vinci_Card.jpg';
import BillyCard from '../../assets/images/Billy_Card.jpg';

const InstructorCards = () => {
  const { setInstructor } = useAppContext();

  const handleMathematicsCardClick = () => {
    setInstructor('mathematics'); // This sets the selected instructor when a card is clicked
  };

  const handleHistoryCardClick = () => {
    setInstructor('history'); // This sets the selected instructor when a card is clicked
  };

  const handleLiteratureCardClick = () => {
    setInstructor('literature'); // This sets the selected instructor when a card is clicked
  };

  const handleScienceCardClick = () => {
    setInstructor('science'); // This sets the selected instructor when a card is clicked
  };

  return (
    <div className="flex items-center justify-evenly">
      <div>
        <Link
          className="h-5/6 w-5/6 rounded-lg hover:h-full hover:w-full"
          to="/classroom/"
          onClick={() => handleMathematicsCardClick()}
        >
          <div className="flex items-center justify-center">
            <div className="hover:box relative overflow-hidden rounded-2xl bg-white bg-cover md:h-[250px] md:w-[187.5px] xl:h-[500px] xl:w-[375px]">
              <div className="absoulte bg-white-500 h-full w-full">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    className="w-72 rounded-xl border-4 border-red-500"
                    src="/img/Einie_Instructor.png"
                    alt=""
                  />{' '}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link
          className="h-5/6 w-5/6 rounded-lg hover:h-full hover:w-full"
          to="/classroom/"
          onClick={() => handleHistoryCardClick()}
        >
          <div className="flex items-center justify-center">
            <div className="hover:box relative overflow-hidden rounded-2xl bg-white bg-cover md:h-[250px] md:w-[187.5px] xl:h-[500px] xl:w-[375px]">
              <div className="absoulte bg-white-500 h-full w-full">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    className="w-72 rounded-xl border-4 border-red-500"
                    src="/img/Einie_Instructor.png"
                    alt=""
                  />{' '}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link
          className="h-5/6 w-5/6 rounded-lg hover:h-full hover:w-full"
          to="/classroom/"
          onClick={() => handleScienceCardClick()}
        >
          <div className="flex items-center justify-center">
            <div className="hover:box relative overflow-hidden rounded-2xl bg-white bg-cover md:h-[250px] md:w-[187.5px] xl:h-[500px] xl:w-[375px]">
              <div className="absoulte bg-white-500 h-full w-full">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    className="w-72 rounded-xl border-4 border-red-500"
                    src="/img/Einie_Instructor.png"
                    alt=""
                  />{' '}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link
          className="h-5/6 w-5/6 rounded-lg hover:h-full hover:w-full"
          to="/classroom/"
          onClick={() => handleLiteratureCardClick()}
        >
          <div className="flex items-center justify-center">
            <div className="hover:box relative overflow-hidden rounded-2xl bg-white bg-cover md:h-[250px] md:w-[187.5px] xl:h-[500px] xl:w-[375px]">
              <div className="absoulte bg-white-500 h-full w-full">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    className="w-72 rounded-xl border-4 border-red-500"
                    src="/img/Einie_Instructor.png"
                    alt=""
                  />{' '}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InstructorCards;
