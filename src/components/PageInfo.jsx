const pageInfo = [
  {
    name: "Personal info",
    info: "Please provide your name, email address, and phone number.",
  },
  {
    name: "Select your plan",
    info: "You have the option of monthly or yearly billing.",
  },
  {
    name: "Pick add-ons",
    info: "Add-ons help enhance your gaming experience.",
  },
  {
    name: "Finishing up",
    info: "Double-check everything looks OK before confirming.",
  },
];

function PageInfo({ dataNum }) {
  if (dataNum > 3 || dataNum < 0) return <p>No Data</p>;
  console.log(dataNum);
  return (
    <div className="mb-1">
      <h1 className="mb-0.25 text-lg font-bold text-blue-marine">
        {pageInfo[dataNum].name}
      </h1>
      <p className="text-gray-cool">{pageInfo[dataNum].info}</p>
    </div>
  );
}

export default PageInfo;
