import React from "react";

type Props = { children: React.ReactNode };

const ManageAllUserTable = (props: Props) => {
  return (
    <div className=" overflow-x-auto">
      <table className="w-full whitespace-nowrap">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>ContactNo</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

export default ManageAllUserTable;
