import React,{useState} from 'react';
import Startupdetails from './Startupdetails';

function Startups({ data }) {
  const [selectedStartup, setSelectedStartup] = useState(null);

  const handleClick = (startup) => {
    setSelectedStartup(startup);
  };

  const handleClose = () => {
    setSelectedStartup(null);
  };
  return (
    <div className="mt-8 flex flex-wrap bg-black">
      {/* Check if data is available */}
      {data.length > 0 ? (
        // If data is available, map over it and create cards
        data.map((startup) => (
          <div key={startup._id} className={`flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4`} >
            <div className="border border-white-300 p-4 mb-4 rounded h-full bg-white cursor-pointer transition-transform transform hover:scale-105" onClick={() => handleClick(startup)}>
              <h2 className="text-xl text-black font-bold mb-4 ml-4">{startup.StartupName}</h2>
              <hr/>
              <p className="text-black mb-2 font-bold">Industry:<br/>
                <span
                  style={{
                    backgroundColor: '#F5E6FC',
                    color: '#7712AD',
                    fontSize: '15px',
                    margin: '3px 0 3px 0',
                    borderRadius: '50rem',
                    display: 'inline-block',
                    padding: '0.35em 0.65em',
                    fontWeight: '700',
                    lineHeight: '1',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'baseline',
                  }}
                >
                  {startup.IndustryVertical}
                </span>
              </p>
              <p className="text-black mb-2 font-bold">City:<br/> 
              <span
                  style={{
                    backgroundColor: '#d2eaf6',
                    color: '#2e5b7a',
                    fontSize: '15px',
                    margin: '3px 0 3px 0',
                    borderRadius: '50rem',
                    display: 'inline-block',
                    padding: '0.35em 0.65em',
                    fontWeight: '700',
                    lineHeight: '1',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'baseline',
                  }}
                >
                  {startup.CityLocation}
                </span>
              
              </p>
              <p className="text-black mb-2 font-bold">Year:<br/>
              <span
                  style={{
                    backgroundColor: '#d7eae0',
                    color: '#3c5d48',
                    fontSize: '15px',
                    margin: '3px 0 3px 0',
                    borderRadius: '50rem',
                    display: 'inline-block',
                    padding: '0.35em 0.65em',
                    fontWeight: '700',
                    lineHeight: '1',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'baseline',
                  }}
                >
                  {startup.Date.split('/')[2]}
                </span>
               
               </p>
              {startup.AmountInUSD && (
                <p className="text-black mb-2 font-bold">
                  Funding Amount: <br/>
                  <span
                  style={{
                    backgroundColor: '#ffff99',
                    color: '#666600',
                    fontSize: '15px',
                    margin: '3px 0 3px 0',
                    borderRadius: '50rem',
                    display: 'inline-block',
                    padding: '0.35em 0.65em',
                    fontWeight: '700',
                    lineHeight: '1',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'baseline',
                  }}
                >
                  ${startup.AmountInUSD.replace(/,/g, '')}
                </span>
                  
                </p>
              )}
              {/* Add more details as needed */}
            </div>
          </div>
        ))
      ) : (
        // If no data is available, display a message
        <p>No startup data available</p>
      )}

      {selectedStartup && <Startupdetails startup={selectedStartup} onClose={handleClose} />}
    </div>
  );
}

export default Startups;
