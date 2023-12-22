import DashboardLayout from "@/Layout/DashboardLayout/DashboardLayout";
import { ICreation } from "@/interface";
import { useGetCreationsQuery } from "@/redux/features/creation/creationApi";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const { data, isLoading } = useGetCreationsQuery("limit=100");
  let result: ICreation[] = [];
  if (data?.data) {
    result = data.data as ICreation[];
  }
  return (
    <DashboardLayout>
      {isLoading ? (
        <div>
          <p>Loading ...</p>
        </div>
      ) : (
        <div>
          {result.map((single) => (
            <div key={single._id}>
              <div>
                <img
                  src={single.createdBy.photoURL}
                  className="w-[100px] rounded-full"
                  alt=""
                />
              </div>
              <div>
                <p>{single.createdBy.displayName}</p>
                <p>{single.createdBy.email}</p>
              </div>
              <div>
                <p>{single.technology}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
