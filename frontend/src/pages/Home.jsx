import React, { useState, useEffect } from "react";
import MenuIcon from "../Assets/menu.svg";
import Startups from "../components/startups";

function Home() {
  const [startupData, setStartupData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data whenever the page state changes

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://startup-directory-droid-anuj.vercel.app/api/startups?page=${page}&limit=20`
      );
      const data = await response.json();
      // Append the new data to the existing data
      setStartupData((prevData) => [...prevData, ...data]);
    } catch (error) {
      console.error("Error fetching startup data:", error);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex">
      <div className="flex-1 custom-bg-color">
        <div className="flex justify-between items-center p-4 h-20 bg-black border-b border-white">
          <div className="text-3xl font-bold text-white">NexStarts</div>
          <div className="text-right">
            <img
              src={MenuIcon}
              alt="Menu Icon"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>

        <div
          className="text-center mt-8 w-full text-white"
          style={{ height: "30vh" }}
        >
          <h1 className="text-6xl mb-4 font-pacifico font-extrabold text-white">
            Transforming{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ideas into Reality
            </span>
          </h1>

          <p className="text-3xl font-display mt-20">
            Explore the world of startups and innovation. Turning dreams into
            successful ventures.
          </p>
        </div>
        <div>
          <div className="flex justify-around space-x-4  ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 w-60">
                Industry Vertical
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 ml-1"
              >
                <li>Technology</li>
                <li>Consumer Internet</li>
                <li>eCommerce</li>
                <li>Logistics</li>
                <li>Healthcare</li>
                <li>Food & Beverage</li>
                <li>Others</li>
              </ul>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 w-60">
                City Location
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 ml-1"
              >
                <li>Bangalore</li>
                <li>Mumbai</li>
                <li>New Delhi</li>
                <li>Hyderabad</li>
                <li>Ahmedabad</li>
                <li>Gurgaon</li>
                <li>Noida</li>
                <li>Pune</li>
                <li>Kolkata</li>
                <li>Trivandrum</li>
                <li>Chennai</li>
                <li>Jaipur</li>
                <li>Surat</li>
                <li>Panaji</li>
                <li>Udupi</li>
                <li>Kochi</li>
                <li>Singapore</li>
                <li>Indore</li>
                <li>Kozhikode</li>
                <li>US</li>
                <li>Coimbatore</li>
                <li>Seattle</li>
                <li>UK</li>
                <li>NY</li>
                <li>Goa</li>
                <li>San Mateo</li>
                <li>USA</li>
                <li>California</li>
                <li>Udupi</li>
              </ul>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 w-60">
                Investment Type
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 ml-1"
              >
                <li>Private Equity</li>
                <li>Seed Funding</li>
              </ul>
            </div>
          </div>
        </div>

        <Startups data={startupData} />

        <div className="flex justify-center mt-4 mb-4">
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Load More
          </button>
        </div>
        <footer className="footer p-10 bg-base-300 text-base-content">
          <nav>
            <header className="footer-title">Services</header>
            <a href="aaa#" className="link link-hover">
              Branding
            </a>
            <a href="#aa" className="link link-hover">
              Design
            </a>
            <a href="#aa" className="link link-hover">
              Marketing
            </a>
            <a href="#aaaa" className="link link-hover">
              Advertisement
            </a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a href="#fgdfg" className="link link-hover">
              About us
            </a>
            <a href="#dgfgd" className="link link-hover">
              Contact
            </a>
            <a href="#gdfgd" className="link link-hover">
              Jobs
            </a>
            <a href="#fgdg" className="link link-hover">
              Press kit
            </a>
          </nav>
          <nav>
            <header className="footer-title">Social</header>
            <div className="grid grid-flow-col gap-4">
              <a href="#dfgdfg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  {/* ... (icon path) */}
                </svg>
              </a>
              <a href="#dgfdgfg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  {/* ... (icon path) */}
                </svg>
              </a>
              <a href="#fgdfg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  {/* ... (icon path) */}
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Home;
