const Vaccination = () => {
  return (
    <div>
      <div className=" w-[800px] m-auto mt-10">
        <div className="font-bold mb-[-16px] text-slate-400">GUIDANCE</div>
        <div className=" text-slate-700 text-[40px] font-bold">
          Vaccinations for students entering university
        </div>
      </div>
      <div className="flex justify-center bg-slate-900 mt-[30px] py-[30px]">
        <div className="w-[500px] text-slate-50 text-[20px] font-bold">
          Check that you are up-to date on your vaccinations before starting
          college or university.
        </div>
        <table className="text-slate-50 w-[300px]">
          <tr>
            <td className=" w-[100px] relative top-[-47px] left-[40px] text-slate-300">
              Part of:
            </td>
            <td>
              Further education: coronavirus (Sub-topic),
              <br /> Higher education: coronavirus (Sub-topic)and Vaccination
            </td>
          </tr>
        </table>
      </div>
      <div className="flex w-[800px] m-auto gap-[20px] mt-[50px]">
        <div className=" w-[620px] text-[20px]">
          <div className=" text-[40px] font-bold mb-10">Overview</div>
          <p>
            At college or university you will be meeting, mixing and living with
            lots of new people. This can be an ideal environment for viral
            infections to spread.
            <br />
            <br />
            Vaccination protects you from serious, potentially even fatal
            diseases. Being fully vaccinated will also help to limit the spread
            of these viruses. This will help protect you, your family, your
            peers, and vulnerable people. <br />
            <br />
            Make sure you are protected against:
          </p> <br />
          <ul className="ml-10 list-disc">
            <li>Measles (nhs.uk) </li>
            <li>Mumps (nhs.uk) </li>
            <li>Meningitis (nhs.uk) </li>
            <li>Human Papillomavirus (HPV) (nhs.uk) </li>
          </ul>
          <div className=" text-[30px] font-bold my-10">
            Check that you are up-to-date with your vaccinations
          </div>
          <div>Vaccinations you should have received:</div>
          <ul className="my-5 ml-10 list-disc">
            <li>2 doses of the MMR vaccine</li>
          </ul>
          <div>
            This protects against measles, mumps and rubella. Children are
            usually vaccinated before they start primary school.
          </div>
          <ul className="my-5 ml-10 list-disc">
            <li>1 dose of MenACWY vaccine</li>
          </ul>
          <div>
            This protects against 4 different strains of Meningitis (A, C,Y and
            Men W). You are usually offered this vaccine in year 9.
          </div>
          <ul className="my-5 ml-10 list-disc">
            <li>The HPV vaccine</li>
          </ul>

          <div>
            This protects against Human Papillomavirus (nhs.uk), a very common
            sexually transmitted infection. The HPV vaccine helps protect
            against cancers and genital warts caused by HPV. You are usually
            first offered the vaccine in year 8.
            <br />
            <br />
            In the past, the HPV vaccine has been offered as 2 doses. Expert
            evidence now shows one dose provides young people with the same
            level of protection as the previous two doses. From 1st September
            2023, if you have received one dose of HPV vaccine you are fully
            vaccinated against HPV and will not need any additional doses.
          </div>
          <ul className="my-5 ml-10 list-disc">
            <li>COVID-19, Mpox and Flu vaccines</li>
          </ul>

          <div>
            You may also be eligible for additional vaccines such as COVID-19,
            flu and mpox. Ask your GP or healthcare professional for more
            information. <br /> <br />
            Visit the Public Health Wales website for further information on
            vaccines.
          </div>
        </div>

        <div className=" mt-[10px]">
            <div className="mb-[-5px] text-[14px] font-bold text-slate-400">RELEATED</div>
            <div className=" text-[20px] font-bold">Vaccination</div>
            <ul className="ml-10 list-disc">
                <li className="my-2 ">Vaccination and immunisations</li>
                <li className="my-2 ">Mpox (Monkeypox) vaccination programme</li>
                <li className="my-2 ">Flu vaccinattion programme</li>
            </ul>
            <div className=" text-[20px] font-bold">Vaccination: Coronavirus</div>
            <ul className="ml-10 list-disc">
                <li className="my-2 ">COVID-19 vaccination programme</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Vaccination;
