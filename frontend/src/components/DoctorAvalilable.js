import doctorAvator from '../images/DoctorAvatar-01.jpg';
const DoctorAvailable = () => {
    const date = new Date();
    return (
        <>
        <div className='flex items-center gap-3'>
            <div className=' pb-6 text-[22px] text-slate-800 font-bold'>Today active doctors</div>
            <div className='text-[16px] text-slate-500 font-bold pb-6'>[{date.toDateString()}]</div>
        </div>
        
        <div className='flex flex-row flex-wrap items-center gap-10 '>
            {
                Array.from({length: 4}).map((_,i)=> 
                    <div className='flex flex-row items-center font-medium' key={i}>
                        <img src={doctorAvator} alt='' className=' w-[50px] rounded-l-[10px]'/>
                        <div className=' h-[50px] text-slate-800 px-5  rounded-r-[10px] w-[150px]'>
                            <div className='text-[20px]'>J. Lawrence</div>
                            <div className=' text-[12px]'>lawrence75@gmail.com</div>
                        </div>
                    </div>
                )
            }
            
        </div>
        </>
    )
}   

export default DoctorAvailable;