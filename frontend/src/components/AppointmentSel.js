import { useEffect, useState } from "react";
import {
  getBookedList,
  getUser,
  placeAppointment,
} from "../services/appoinments";

const AppointmentSel = () => {
  const [select, setSelect] = useState(false);
  const [array, setArray] = useState([]);
  const [clickNext, setClickNext] = useState(false);
  const [selectYear, setSelectYear] = useState(null);
  const [selectDept, setSelectDept] = useState(null);
  const [selectIndex, setSelectIndex] = useState(null);
  const [isSetReg, setIsSetReg] = useState(false);
  const [selectUser, setSelectUser] = useState(null);
  const [note, setNote] = useState(null);
  const [completeAppt, setCompleteAppt] = useState(false);
  const years = [2021, 2022, 2023, 2024];
  const dept = [
    "A",
    "BAD",
    "BS",
    "BST",
    "COM",
    "CSC",
    "PHY",
    "L",
    "MS",
    "NUR",
    "PHA",
  ];

  async function fetchData() {
    const { array } = await getBookedList();
    setArray(array);
    console.log(array);
  }

  async function handleSlotSelection(i) {
    setSelect(i);
    await fetchData();
  }

  function handleNext() {
    setClickNext(true);
  }

  async function appointmentHandle() {
    const regNumber = `${selectYear}${selectDept}${selectIndex}`;
    const response = await placeAppointment(select, regNumber, note);
    console.log(response.data);
    if (response) {
      setCompleteAppt(true);
      setClickNext(false);
      alert("Appointment place completed");
    }
  }

  async function registerNumberHandler() {
    if (selectYear === null || selectDept === null || selectIndex === 0) {
      setIsSetReg(false);
    } else {
      setIsSetReg(true);
      const user = await getUser(`${selectYear}${selectDept}${selectIndex}`);
      setSelectUser(user.name);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className=" mt-5 text-[30px] text-slate-200">
        PLACE YOUR APPOINTMENT
      </div>
      {!clickNext && (
        <div className="flex flex-row flex-wrap my-5 ">
          {Array.from({ length: 80 }).map((_, i) => (
            <div className="flex m-2" key={i}>
              <input
                type="radio"
                name="btnchecked"
                id={`sel-${i}`}
                className="hidden peer"
                onClick={() => handleSlotSelection(i + 1)}
                disabled={array.includes(i + 1)}
              />
              <label
                for={`sel-${i}`}
                className={`px-4 py-2 ${
                  array.includes(i + 1)
                    ? "bg-slate-500 text-white  border-slate-500"
                    : "hover:bg-blue-500 hover:text-white hover:border-blue-500  cursor-pointer text-slate-400 border-slate-400"
                }
                             border  rounded-lg  peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:text-white`}
              >
                {i + 1 >= 10 ? i + 1 : `0${i + 1}`}
              </label>
            </div>
          ))}
        </div>
      )}
      {clickNext && (
        <div className="mt-4">
          <div className="text-white ">Select your registration number</div>
          <div>
            <form onSubmit={registerNumberHandler}>
              <select onChange={(e) => setSelectYear(e.target.value)}>
                <option value={null}>Year</option>
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
              <select onChange={(e) => setSelectDept(e.target.value)}>
                <option>Department</option>
                {dept.map((dept) => (
                  <option value={dept}>{dept}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="000"
                onChange={(e) => setSelectIndex(e.target.value)}
              />
              <br />
              {!isSetReg ? (
                <div className="text-red-600 ">select valid year</div>
              ) : (
                <div className="text-green-600 ">success</div>
              )}
              <input
                className=" bg-slate-100"
                type="button"
                value={"clickem"}
                onClick={registerNumberHandler}
              />
            </form>
            {selectUser && (
              <div>
                <div className=" text-slate-400">
                  <span className=" text-slate-100 text-[13px]">NAME: </span>{" "}
                  {selectUser}
                </div>
                <div className=" text-slate-400">
                  <span className="text-slate-100 text-[13px]">REG NO: </span>
                  {selectUser === null
                    ? ""
                    : `${selectYear}/${selectDept}/${selectIndex} `}
                </div>
                <div className=" text-slate-400">
                  <span className=" text-slate-100 text-[13px]">
                    {" "}
                    APPOINTMENT NO:
                  </span>{" "}
                  {`${select}`}
                </div>
                <textarea
                  placeholder="Enter special note"
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                />
                <div className="flex flex-row gap-4">
                  <button className="px-4 py-2 text-white bg-red-600 ">
                    Not You
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-blue-600"
                    onClick={appointmentHandle}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {!clickNext && (
        <div className="float-right ">
          {/* <button className={`px-5 rounded-sm py-2 mb-5 mx-4 ${(select)? 'bg-red-500 text-red-50' : 'text-slate-100 bg-slate-600'}`} disabled={!select} onClick={()=> {setSelect(false)}}>Clear</button> */}
          <button
            className={` px-5 rounded-sm py-2 mb-5  ${
              select
                ? "text-slate-50 bg-blue-500 "
                : "text-slate-50 bg-slate-600"
            }`}
            disabled={!select}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentSel;
