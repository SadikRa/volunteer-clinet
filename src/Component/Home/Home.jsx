import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";

const Home = () => {

    const data = useLoaderData()

    return (
        <div className="my-16">
           <div className="text-center">
           <h1 className=" my-5">I grow by helping people in need.</h1>
            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
            <input type="button" value="search" className="btn btn-primary" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 my-16">
            {
                data.map((data) => ( <HomeCard key={data._id} data={data}></HomeCard> ))
            }
           </div>
        </div>
    );
};

export default Home;