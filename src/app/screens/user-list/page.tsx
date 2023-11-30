"use client";
import { UserContext } from "@/context/usersContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const UserList = () => {
  const { users, deleteUser, setEditUserState } = useContext(UserContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 text-black">
      <div className="overflow-x-auto w-full">
        {users?.length ? (
          <table className="w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-2 sm:px-4 border-b text-left">Photo</th>
                <th className="py-2 px-2 sm:px-4 border-b text-left">FName</th>
                <th className="py-2 px-2 sm:px-4 border-b text-left">LName</th>
                <th className="py-2 px-2 sm:px-4 border-b text-left">Gender</th>
                <th className="py-2 px-2 sm:px-4 border-b text-left">Email</th>
                <th className="py-2 px-2 sm:px-4 border-b text-left">Number</th>
                <th className="py-2 px-2 sm:px-4 border-b text-left">Date</th>
                <th className="py-2 px-2 sm:px-4 border-b text-left">City</th>
                <th className="py-2 px-2 sm:px-4 border-b text-left">
                  Professional Skills
                </th>
                <th className="py-2 px-2 sm:px-4 border-b text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2 px-2 sm:px-4 border-b clo text-left">
                      <Image
                        src={URL.createObjectURL(item?.image)}
                        alt="logo"
                        width={40}
                        height={40}
                      />
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b text-left">
                      {item?.fName}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b text-left">
                      {item?.lName}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b text-left">
                      {item?.gender}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b text-left">
                      {item?.email}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b text-left">
                      {item?.number}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b text-left">
                      {item?.date}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b text-left">
                      {item?.city}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b text-left">
                      {item?.professionalSkills?.map((i) => (
                        <p key={i}>{i}</p>
                      ))}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border-b text-left">
                      <Link href={"/"} onClick={() => setEditUserState(index)}>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => deleteUser(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="flex w-screen h-screen items-center justify-center">
            <h1 className="text-white">No Data Saved</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default UserList;
