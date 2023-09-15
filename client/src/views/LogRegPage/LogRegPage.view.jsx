import React from 'react';

import UserForm from '../../components/UserForm/UserForm.component';
import Footer from '../../components/Footer/Footer.component';
import RegBanner from '../../components/RegBanner/RegBanner.component';

const LogRegPage = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------

  // i) Lifting States
  const { setUser } = props;

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------
  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto]">
      <div>
        <RegBanner />
      </div>
      <div className="grid grid-cols-2 content-center justify-items-center">
        <div className="">
          <UserForm formType={'register'} setUser={setUser} />
        </div>

        <div className="">
          <UserForm formType={'login'} setUser={setUser} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LogRegPage;
