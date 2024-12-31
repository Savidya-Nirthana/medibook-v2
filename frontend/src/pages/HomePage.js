import AppointmentSel from "../components/AppointmentSel";
import DoctorAvailable from "../components/DoctorAvalilable";
import LoginPage from "./LoginPage";
import backImage from "../images/Duty-Medical-Officer-1.webp";
import Footer from "../components/Footer";
import AboutBanner from "../images/Health-Science.jpg"
import { useContext, useState } from "react";
import API from "../services/axoisInstance";
import { Context } from "../App";
const API_URL = "api/users";

const HomePage = () => {
  const [token, setToken] = useContext(Context);
  const [user, setUser] = useState(null);
  API.post(`${API_URL}/getUser`, { token }).then((response) => {
    setUser(response.data);
  });
  return (
    <>
      <div className="flex w-[900px] m-auto text-[20px] font-bold gap-10 my-10">
        <div className="w-[600px]">
          <DoctorAvailable />
        </div>
        <div className="w-[300px]">
          <div className="text-[22px] mb-4 mt-1">Contents</div>
          <ul className="ml-5 list-disc border-b-[3px] border-blue-900 pb-5 text-[18px] font-normal">
            <li className="text-blue-900">Place appointment</li>
            <li className="text-blue-900 ">About</li>
            <li className="text-blue-900">Location</li>
          </ul>
        </div>
      </div>

      {!token && (
        <>
          <div className=" flex  w-full gap-[0px] bg-slate-900">
            <div className="px-10 ">
              <AppointmentSel />
            </div>

            <div className="row-start-1 px-10 m-auto">
              <LoginPage />
            </div>
          </div>
        </>
      )}
      {token && (
        <div className="flex justify-center">
          <div className="w-[90%] flex justify-center row-start-1 px-10 bg-slate-900">
            <AppointmentSel />
          </div>
        </div>
      )}

      <div className="flex w-[900px] m-auto gap-[20px] mt-10">
        <div className="w-[650px]">
          <div className=" text-[30px] font-bold py-5">ABOUT</div>
          <div className=" text-[18px]">
            <img src={AboutBanner}/>
            <p>
              The Health Centres ware started in 1975 at Vaddukoddai and
              Thirunelvely. Vaddukoddai Helath Centre was run by the DMO,
              Vaddukoddai upto 1979, Thirunelvely Health Centre was run by Dr.
              V. Sivagnanaratnam – Visiting Medical Officer.
              <br />
              <br />
              The University Health Service was organized to help the students
              and Staff of the University to lead an active life free from
              disease. Initially, all registered University students were
              entitled to free consultations and laboratory services and the
              service was set up solely for the benefit of the student body. It
              was believed that timely treatment and care of even mild ailments
              could prevent the occurrence of more serious diseases, minimize
              the rate of absenteeism from classes and control the spread of
              infection to others.
            </p>
            <div className="text-slate-900  font-bold text-[20px] py-5">
              We Take Care Of Your Healthy Life
            </div>
            <p className=" text-justify text-[18px]">
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
        <div className="w-[200px]">
          <div className=" text-[22px] font-bold py-5 ">OUR SERVICES</div>
          <ul className=" text-slate-800 list-disc  text-[18px] ml-10">
            <li className="pb-2 ">
              <a href="#">Medical Treatments</a>
            </li>
            <li className="pb-2 ">
              <a href="#">Vaccinations</a>
            </li>
            <li className="pb-2 ">
              <a href="#">Counseling</a>
            </li>
            <li className="pb-2 ">
              <a href="#">Laboratory Investigation</a>
            </li>
            <li className="pb-2 ">
              <a href="#">Advice & Counseling</a>
            </li>
            <li className="pb-2 ">
              <a href="#">Medical Certificates</a>
            </li>
            <li className="pb-2 ">
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
    </>
  );
};

export default HomePage;
