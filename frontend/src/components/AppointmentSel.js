import {useState, useReducer} from 'react';
import { getBookedList } from '../services/appoinments';


const {array} = await getBookedList();
console.log(array);
const AppointmentSel = () => {  
    const [select, setSelect] = useState(false);
    return(
        <div className="">
        <div className=" mt-5 text-[30px] text-slate-200">PLACE YOUR APPOINTMENT</div>
        <div className=" flex flex-row flex-wrap my-5">
            {
                Array.from({length: 80}).map((_,i) => 
                    <div className="flex m-2">
                        <input 
                            type="radio" 
                            name="btnchecked" 
                            id={`sel-${i}`} 
                            className="hidden peer"  
                            onClick={() => setSelect(i+1)} 
                            disabled = {array.includes(i+1)}                         
                        />
                        <label 
                            for={`sel-${i}`}
                            className={`px-4 py-2 ${(array.includes(i+1))? 'bg-slate-500 text-white  border-slate-500' : 'hover:bg-blue-500 hover:text-white hover:border-blue-500  cursor-pointer text-slate-400 border-slate-400'}
                             border  rounded-lg  peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:text-white`}
                        >
                            {(i+1>=10) ? i+1: `0${i+1}`}
                        </label>
                    </div>
                    
                    
                )
            }
            
        </div>
        <div className=' float-right'>
            {/* <button className={`px-5 rounded-sm py-2 mb-5 mx-4 ${(select)? 'bg-red-500 text-red-50' : 'text-slate-100 bg-slate-600'}`} disabled={!select} onClick={()=> {setSelect(false)}}>Clear</button> */}
            <button className={` px-5 rounded-sm py-2 mb-5  ${(select)? 'text-slate-50 bg-blue-500 ' : 'text-slate-50 bg-slate-600'}`} disabled={!select}>Next</button>
        </div>
        </div>
        
    )
}

export default AppointmentSel;