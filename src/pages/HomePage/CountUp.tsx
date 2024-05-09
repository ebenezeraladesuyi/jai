import React, { useEffect, useState } from 'react';
// import RevealOnScroll from '../../components/static/onScroll/RevealOnScroll';

const CountUpSection: React.FC = () => {
  const [satisfiedClientsCount, setSatisfiedClientsCount] = useState(0);
  const [completedJobsCount, setCompletedJobsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [satisfiedClientsTimeoutId, setSatisfiedClientsTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [completedJobsTimeoutId, setCompletedJobsTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [servicesTimeoutId, setServicesTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const countUp = () => {
      // Increment satisfied clients count up to 50
      if (satisfiedClientsCount < 50) {
        const timeoutId = setTimeout(() => {
          setSatisfiedClientsCount((prevCount) => prevCount + 1);
        }, 100);
        setSatisfiedClientsTimeoutId(timeoutId);
      }

      // Increment completed jobs count up to 200
      if (completedJobsCount < 250) {
        const timeoutId = setTimeout(() => {
          setCompletedJobsCount((prevCount) => prevCount + 1);
        }, 100);
        setCompletedJobsTimeoutId(timeoutId);
      }

    //   increment services offered count up to 10
    if (servicesCount < 2) {
        const timeoutId = setTimeout(() => {
            setServicesCount((prevCount) => prevCount + 1);
        }, 100)
        setServicesTimeoutId(timeoutId)
    }
    };

    countUp();

    // Cleanup function to clear setTimeout
    return () => {
      if (satisfiedClientsTimeoutId) clearTimeout(satisfiedClientsTimeoutId);
      if (completedJobsTimeoutId) clearTimeout(completedJobsTimeoutId);
      if (servicesTimeoutId) clearTimeout(servicesTimeoutId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [satisfiedClientsCount, completedJobsCount, servicesCount]);

  return (
    // <RevealOnScroll>
      <div className="count-up-section w-full h-[50vh md:h-[30vh] bg-black text-white flex  items-center justify-center md:gap-10 font-bold pt-[30px] pb-[30px] overflow-hidden">

          <div className='w-full md:w-[70%] lg:w-[55%] flex flex-col md:flex-row items-center gap-5 justify-center md:justify-between'>
              
              <div className="count-item text-[25px] md:text-[35px] lg:text-[35px] text-center">
                  <h2>{servicesCount}+</h2>
                  <p className='text-orange-500 text-[20px] md:text-[24px]'>Services</p>
              </div>
              
              <div className="count-item text-[25px] md:text-[35px] lg:text-[35px] text-center">
                  <h2>{satisfiedClientsCount}+</h2>
                  <p className='text-orange-500 text-[20px] md:text-[24px]'>Satisfied Clients</p>
              </div>

              <div className="count-item text-[25px] md:text-[35px] lg:text-[35px]  text-center">
                  <h2>{completedJobsCount}+</h2>
                  <p className='text-orange-500 text-[20px] md:text-[24px]'>Completed Services</p>
              </div>

          </div>

      </div>
    // </RevealOnScroll>
  );
};

export default CountUpSection;
