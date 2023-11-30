"use client";
import React, { createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

type User = {
  fName: string;
  lName: string;
  image: File;
  gender: string;
  email: string;
  number: string;
  date: string;
  city: string;
  professionalSkills: string[];
};

type ContextType = {
  users: User[];
  addUser: (data: User) => void;
  deleteUser: (index: number) => void;
  editUser: (index: number, data: User) => void;
  setEditUserState: (index: number) => void;
  editUserState: number;
};

export const UserContext = createContext<ContextType>({
  users: [],
  addUser: () => {},
  deleteUser: () => {},
  editUser: () => {},
  setEditUserState: () => {},
  editUserState: -1,
});

export const UsersProvider: React.FC<Props> = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [editUserState, setEditUserState] = useState<number>(-1);

  const addUser = (data: User) => {
    setUsers([...users, data]);
  };

  const deleteUser = (index: number) => {
    setUsers((prev) => prev?.filter((_, i) => i !== index) || []);
  };

  const editUser = (index: number, data: User) => {
    const usersClone = [...users];
    usersClone[index] = { ...data };
    setUsers(usersClone);
  };

  const contextValue: ContextType = {
    users,
    addUser,
    deleteUser,
    editUser,
    setEditUserState,
    editUserState,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
