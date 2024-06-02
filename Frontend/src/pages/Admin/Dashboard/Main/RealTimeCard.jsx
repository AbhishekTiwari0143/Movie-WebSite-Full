import { useGetUsersQuery } from "../../../../redux/api/user";
import PrimaryCard from "./PrimaryCard";

const RealTimeCard = () => {
  const { data: visitors } = useGetUsersQuery();

  return (
    <div className=" mt-10 bg-[#282828] text-[#fff] rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-2">Relal time</h2>
      <p className="text-gray-500 mb-4">Update Live</p>
      <div className="border-t border-[#666] mb-7"></div>
      <h2 className="text-2xl font-bold mb-2">{visitors?.length}</h2>
      <p className="text-gray-500 mb-2">Subscribe</p>

      <hr />
      <PrimaryCard />
    </div>
  );
};

export default RealTimeCard;
