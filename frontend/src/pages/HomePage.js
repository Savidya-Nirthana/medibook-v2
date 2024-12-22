import AppointmentSel from "../components/AppointmentSel";
import DoctorAvailable from "../components/DoctorAvalilable";
import LoginPage from "./LoginPage";
import backImage from "../images/Duty-Medical-Officer-1.webp";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="m-10 ">
        <DoctorAvailable />
      </div>
      <div className=" grid grid-cols-[60%, 40%]  w-full gap-[0px]">
        <div className="row-start-1 px-10 bg-slate-800">
          <AppointmentSel />
        </div>

        <div className="row-start-1 px-10 ">
          <LoginPage />
        </div>
      </div>
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
            <p className=" text-justify z-10 bg-slate-50 mx-10 p-5 text-[20px] mt-[-25px]">
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
          <ul className=" bg-slate-800 mt-5 text-slate-50 list-none p-10 text-[22px]">
            <li className="p-5 ">
              <a href="#">Medical Treatments</a>
            </li>
            <li className="p-5 ">
              <a href="#">Vaccinations</a>
            </li>
            <li className="p-5 ">
              <a href="#">Counseling</a>
            </li>
            <li className="p-5 ">
              <a href="#">Laboratory Investigation</a>
            </li>
            <li className="p-5 ">
              <a href="#">Advice & Counseling</a>
            </li>
            <li className="p-5 ">
              <a href="#">Medical Certificates</a>
            </li>
            <li className="p-5 ">
              <a href="#">Referral</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-10 ">
        <div className="text-[22px] font-bold">OUR STAFF</div>
        


      </div>
      <Footer />
    </>
  );
};

export default HomePage;
