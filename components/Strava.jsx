import { useEffect, useState } from "react";
import Image from "next/image";


const Strava = ({ initialData }) => {
    const [stravaData, setStravaData] = useState(initialData);

    useEffect(() => {
      setStravaData(initialData);
    }, [initialData]);

    return (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-teal-600 font-bold text-4xl my-10">Current Activity</h2>
          <div className="flex flex-wrap justify-center items-center">
            
          </div>
        </div>
    );
}

export default Strava;
