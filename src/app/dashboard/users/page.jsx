"use client";
import Form from 'react-bootstrap/Form';
import UserRow from "@/components/Dashboard/Users/UserRow";
import Loading from "../activities/loading";
import useFetchData from "@/hooks/useFetchData";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";

const UserPage = () => {
	// Sorry to interrupt - from Zarifff
  const [Search, setSearch] = useState("");
  console.log(Search);
  const { data: users, error, isLoading } = useFetchData("/api/users");

  if (error) return <div>failed to load</div>;
//   console.log(users);
  if (isLoading)
    return (
      <div className="mx-auto  flex justify-center items-center pt-40">
        <Loading />
      </div>
    );

  return (
    <div className="w-10/12 ml-auto mr-24 pt-8">
      <div className="border mb-3 w-3/12 text-2xl z-0	 p-2 rounded-md flex justify-between">
        
        <div>
          <h1 className="">Total User: {users?.length}</h1>
        </div>
		
      </div>
	  <div>
          <form>
            <InputGroup className="mb-3">
			<Form.Control 
			onChange={(e) => setSearch(e.target.value)}
			placeholder="name" />
			</InputGroup>
          </form>
        </div>
      <div className="w-full mb-60 ml-auto mr-24 glass mt-16 rounded-md z-0">
        <div>
          {/* className="overflow-x-auto" */}
          <table className="table">
            {/* head */}
            <thead className="rounded-md text-base font-semibold bg-gray-400 bg-opacity-30 text-gray-950 text-left">
              <tr>
                <th>*</th>
                <th className="w-3/12">User</th>
                <th className="w-3/12">email</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Role</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {users &&
                users
                  .reverse().filter((user) =>{
					return Search.toLowerCase() === "" ? user : user.name.toLowerCase().includes(Search)
				  })
                  .map((user, index) => (
                    <UserRow key={user._id} user={user} index={index}></UserRow>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
