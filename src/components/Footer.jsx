import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../temper/themeContext';

const Footer = () => {
  let { bgColorClass, textColorClass } = useContext(ThemeContext);

  return (
    <div className={bgColorClass}>
      <div className='container'>
        <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-3 mt-4 border-top'>
          <div className='col mb-3'>
            <h5 className={textColorClass}>PRIVACY POLICY</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <Link
                  to='/cookesettings'
                  className='nav-link p-0 text-body-secondary'
                >
                  Cookie settings
                </Link>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5 className={textColorClass}>HELP & SUPPORT</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <Link
                  to='/contact'
                  className='nav-link p-0 text-body-secondary'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5 className={textColorClass}>SUBSCRIBE</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <Link
                  to='/contact'
                  className='nav-link p-0 text-body-secondary'
                >
                  Get a newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div className='col mb-3'>
            <h5 className={textColorClass}>Follow Us</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a
                  href='https://github.com/shandiya94/Team6-collaborative-work/tree/main'
                  className='nav-link p-0 text-body-secondary'
                >
                  Github
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a
                  href='https://github.com/shandiya94/Team6-collaborative-work/tree/main'
                  className='nav-link p-0 text-body-secondary'
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className='col mb-3'>
            <h5 className={textColorClass}>Address</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2 text-body-secondary'>
                Virkesvägen 2, 12030, Stockholm
              </li>
            </ul>
          </div>
          <hr style={{ width: '100%' }} />
          <div className='d-flex justify-content-between w-100'>
            <div className='col'>
              <p className='text-body-secondary' style={{ fontSize: 'larger' }}>
                TEAM 6
              </p>
            </div>
            <div className='col mb-3'>
              <svg className='bi me-2' width='40' height='32'>
                <use xlinkHref='#bootstrap'></use>
              </svg>
              <p
                className='text-body-secondary'
                style={{ fontSize: 'smaller' }}
              >
                Copyright ©2024 Hungry Chief, Inc or related companies. All
                rights reserved, including rights for text and data mining and
                training of artificial technologies or similar technologies.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
