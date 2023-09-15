import React from 'react';
import InstructorBot from '../../components/InstructorBot/InstructorBot.component';
import Footer from '../../components/Footer/Footer.component';
import NavBar from '../../components/NavBar/NavBar.component';

const Classroom = (props) => {
  const { setUser } = props;
  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto] bg-white">
      <NavBar setUser={setUser} />
      <InstructorBot />
      <Footer />
    </div>
  );
};

export default Classroom;
