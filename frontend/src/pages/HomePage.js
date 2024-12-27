import AppointmentSel from "../components/AppointmentSel";
import DoctorAvailable from "../components/DoctorAvalilable";
import LoginPage from "./LoginPage";
import backImage from "../images/Duty-Medical-Officer-1.webp";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/axoisInstance";
const API_URL = "api/users";


const HomePage = ({setToken}) => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const token = location.state?.token;
  setToken(token);
  API.post(`${API_URL}/getUser`, { token }).then((response) => {
    setUser(response.data);
  });
  return (
    <>
      <div className="m-10 ">
        <DoctorAvailable />
      </div>
      {!user && (
        <>
          <div className=" grid grid-cols-[60%, 40%]  w-full gap-[0px]">
            <div className="w-full row-start-1 px-10 bg-slate-800">
              <AppointmentSel />
            </div>

            <div className="row-start-1 px-10 ">
              <LoginPage />
            </div>
          </div>
        </>
      )}
      {user && (
        <div className="flex justify-center">
        <div className="w-[90%] flex justify-center row-start-1 px-10 bg-slate-800">
          <AppointmentSel />
        </div>
        </div>
      )}

      <div className="flex ">
        <div className=" m-10 w-[50%] relative">
          <div className=" text-[22px] font-bold">ABOUT</div>
          <div className=" absolute z-[-10] top-[50px]">
            <img src={backImage} alt="Medical Staff" />
          </div>
          <div className="">
            <h1 className=" bg-slate-800 text-slate-100 text-center w-[350px] py-5 ml-10 mt-[100px] text-[20px]">
              We Take Care Of Your Healthy Life
            </h1>
            <br />
            <p className=" text-justify z-10 bg-slate-50 mx-10 p-5 text-[18px] mt-[-25px]">
              The University Health Service was organized to help the students
              and staff of the university to lead an active life free from
              disease. Initially, all registered university students were
              entitled to free consultations and laboratory services, and the
              service was set up solely for the benefit of the student body. It
              was believed that timely treatment and care of even mild ailments
              could prevent the occurrence of more serious diseases, minimize
              the rate of absenteeism from classes, and control the spread of
              infection to others.
            </p>
          </div>
        </div>
        <div className=" m-10 w-[40%]">
          <div className=" text-[22px] font-bold">OUR SERVICES</div>
          <ul className=" bg-slate-50 mt-5 text-slate-800 list-none p-10 text-[18px]">
            <li className="p-3 ">
              <a href="#">Medical Treatments</a>
            </li>
            <li className="p-3 ">
              <a href="#">Vaccinations</a>
            </li>
            <li className="p-3 ">
              <a href="#">Counseling</a>
            </li>
            <li className="p-3 ">
              <a href="#">Laboratory Investigation</a>
            </li>
            <li className="p-3 ">
              <a href="#">Advice & Counseling</a>
            </li>
            <li className="p-3 ">
              <a href="#">Medical Certificates</a>
            </li>
            <li className="p-3 ">
              <a href="#">Referral</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-10 ">
        <div className="text-[22px] font-bold">LOCATION</div>
        <div className="flex items-center justify-center my-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15731.790044284251!2d80.00707375061332!3d9.685521212447028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe541251d4aa5b%3A0xc77be69c7c905cc0!2sUniversity%20Health%20Center!5e0!3m2!1sen!2slk!4v1734955887691!5m2!1sen!2slk"
            width="100%"
            height="450"
            className="border-0 rounded-md shadow-lg"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-row w-full gap-10 justify-evenly">
        <div>
          University Health Center +94 77231234(Opening Hours - Week Days 8.00
          AM to 4.00 PM)
        </div>
        <div>info@univ.jfn.ac.lk</div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
