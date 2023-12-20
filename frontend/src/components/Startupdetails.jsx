import React from 'react';

function Startupdetails({ startup, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white w-1/2 p-8 rounded-lg relative">
        {/* to display all the details availaible in the json */}
        <span className="absolute top-0 right-0 m-4 text-gray-600 cursor-pointer text-2xl" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4 text-black">{startup.StartupName} Details</h2>
        <hr />
        <p className="mb-2">
          <span className="font-bold text-black">Industry:</span> {startup.IndustryVertical}
        </p>
        <p className="mb-2">
          <span className="font-bold text-black">City:</span> {startup.CityLocation}
        </p>
        <p className="mb-2">
          <span className="font-bold text-black">Date:</span> {startup.Date}
        </p>
        <p className="mb-2">
          <span className="font-bold text-black">Sub-Vertical:</span> {startup.SubVertical}
        </p>
        <p className="mb-2">
          <span className="font-bold text-black">Investors:</span> {startup.InvestorsName}
        </p>
        <p className="mb-2">
          <span className="font-bold text-black">Investment Type:</span> {startup.InvestmentType}
        </p>

        {/* Render "Amount in USD" if it is present in the startup data */}
        {startup.AmountInUSD && (
          <p className="mb-2">
            <span className="font-bold text-black">Amount in USD:</span> {startup.AmountInUSD}
          </p>
        )}

        {/* Render "Remarks" if it is present in the startup data */}
        {startup.Remarks && (
          <p className="mb-2">
            <span className="font-bold text-black">Remarks:</span> {startup.Remarks}
          </p>
        )}

      </div>
    </div>
  );
}

export default Startupdetails;
