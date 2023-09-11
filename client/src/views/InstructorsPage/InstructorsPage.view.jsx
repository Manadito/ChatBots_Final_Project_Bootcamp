import React from 'react';
import InstructorCards from '../../components/InstructorCards/InstructorCards.component';
import NavBar from '../../components/NavBar/NavBar.component';
import Footer from '../../components/Footer/Footer.component';

const Instructors = () => {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto] bg-white">
      <NavBar />
      <InstructorCards />
      <Footer />
    </div>
  );
};

export default Instructors;
