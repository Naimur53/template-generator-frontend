export default function ManageAllUserTable({ children }: { children: React.ReactNode }) {
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
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};
