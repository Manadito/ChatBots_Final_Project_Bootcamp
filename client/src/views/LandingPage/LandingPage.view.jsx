import React from 'react';
import LandingContent from '../../components/LandingContent/LandingContent.component';
import LandingNav from '../../components/LandingNav/LandingNav.component';
import Footer from '../../components/Footer/Footer.component';

const LandingPage = () => {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto] bg-white">
      <LandingNav />
      <LandingContent />
      <Footer />
    </div>
  );
};

export default LandingPage;
