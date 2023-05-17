import { useLoaderData } from "react-router-dom";
import VolunteerListCard from "./VolunteerListCard";

const VolunteerList = () => {
  const volunteers = useLoaderData();

  return (
    <div className="">
      <h1 className="text-3xl">Volunteer register list</h1>
      <div className="table w-full">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Registating date</th>
            <th>Volunteer list</th>
            <th>Action</th>
          </tr>
        </thead>
        {volunteers.map((volunteer, index) => (
          <VolunteerListCard
            volunteer={volunteer}
            key={volunteer._id}
            index={index + 1}
          ></VolunteerListCard>
        ))}
      </div>
    </div>
  );
};

export default VolunteerList;
