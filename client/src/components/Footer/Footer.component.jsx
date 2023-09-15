import React from 'react';

const Footer = () => {
  return (
    <div>
      <nav className="bg-cyan-300 py-10">
        <div className="grid grid-cols-2 justify-center gap-5 px-20">
          <div className="mt-2 grid justify-start">
            <p>
              Made with{' '}
              <span className="inline-block align-middle">
                <img
                  src="/img/Footer_Heart_Icon.svg"
                  alt="heart"
                  className="h-6 w-6"
                />
              </span>{' '}
              in Latin America
            </p>
          </div>
          {/*<div className="grid justify-center">
            <img src={FooterIcon} alt="footre_icon" className="h-10 w-10" />
  </div>*/}
          <div className="mt-2 grid justify-end">
            <p>
              by{' '}
              <span className="inline-block align-middle">
                {' '}
                <img
                  src="/img/Australpix_Logo_Icon.png"
                  alt="heart"
                  className="w-36"
                />
              </span>{' '}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
