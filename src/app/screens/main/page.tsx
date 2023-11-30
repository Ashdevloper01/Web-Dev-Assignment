"use client";
import {
  CitySelector,
  CustomButton,
  DatePicker,
  ImagePicker,
  InputField,
  ProfessionalSkills,
  RadioButton,
} from "@/components";
import { UserContext } from "@/context/usersContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const professionalSkillsArray = [
  "Communication",
  "Critical Thinking",
  "Problem Solving",
  "Initiative",
];

const Main = () => {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [city, setCity] = useState<string>("New york");
  const [professionalSkills, setProfessionalSkills] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [valuesResetted, setValueResetted] = useState(false);

  const { addUser, users, editUserState, editUser, setEditUserState } =
    useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (editUserState > -1) {
      const userObj = users[editUserState];
      let professionalSkillsArrayTemp = professionalSkillsArray?.map((item) =>
        userObj?.professionalSkills?.includes(item)
      );
      setFName(userObj?.fName);
      setLName(userObj?.lName);
      setEmail(userObj?.email);
      setGender(userObj?.gender);
      setImage(userObj?.image);
      setDate(userObj?.date);
      setNumber(userObj?.number);
      setProfessionalSkills(professionalSkillsArrayTemp);
      setCity(userObj?.city);
    }
  }, [editUserState, users]);

  const submitFunction = () => {
    if (
      fName?.trim() === "" ||
      lName?.trim() === "" ||
      image === null ||
      gender === "" ||
      email?.trim() === "" ||
      number?.trim() === "" ||
      date === "" ||
      !professionalSkills?.find((i) => i === true)
    ) {
      alert("Please fill all the values to proceed!");
    } else {
      let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      if(!emailRegex.test(email)){
        alert("Please enter correct email!")
        return
      }
      if (editUserState > -1) {
        editUser(editUserState, {
          fName,
          lName,
          image,
          gender,
          email,
          number,
          date,
          professionalSkills: professionalSkillsArray.filter(
            (_, index) => professionalSkills[index]
          ),
          city,
        });
        setEditUserState(-1);
        alert("Data updated");
        router.replace("/screens/user-list");
      } else {
        addUser({
          fName,
          lName,
          image,
          gender,
          email,
          number,
          date,
          professionalSkills: professionalSkillsArray.filter(
            (_, index) => professionalSkills[index]
          ),
          city,
        });
        alert("Data Saved");
        resetFunction();
      }
    }
  };

  const resetFunction = () => {
    setFName("");
    setLName("");
    setDate("");
    setImage(null);
    setGender("");
    setEmail("");
    setNumber("");
    setProfessionalSkills([false, false, false, false]);
    setValueResetted(true);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="flex flex-col">
        <h2 className="mb-3 font-bold text-2xl">
          {editUserState > -1 ? "Edit" : "Enter"} your details
        </h2>
        <InputField
          type="text"
          placeholder="Enter your first name"
          onChange={(e) => setFName(e.target.value)}
          fieldName="First Name"
          value={fName}
        />
        <InputField
          type="text"
          placeholder="Enter your last name"
          onChange={(e) => setLName(e.target.value)}
          fieldName="Last Name"
          value={lName}
        />
        <ImagePicker
          onChange={(e) => {
            if (e.target.files) {
              setImage(e.target.files[0]);
            } else {
              setImage(null);
            }
          }}
          valueResetted={valuesResetted}
          setValueResetted={setValueResetted}
          image={image}
        />
        <RadioButton
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        />
        <InputField
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          fieldName="Email"
          value={email}
        />
        <InputField
          type="number"
          placeholder="Enter your number"
          onChange={(e) =>
            e.target.value.length < 10 &&
            parseInt(e.target.value) > 0 &&
            setNumber(e.target.value)
          }
          fieldName="Number"
          maxLength={10}
          value={number}
        />
        <DatePicker onChange={(e) => setDate(e.target.value)} value={date} />
        <CitySelector onChange={(e) => setCity(e.target.value)} value={city} />
        <ProfessionalSkills
          onChange={(index) => {
            let cloneState = [...professionalSkills];
            cloneState[index] = !cloneState[index];
            setProfessionalSkills(cloneState);
          }}
          professionalSkillsArray={professionalSkillsArray}
          checked={professionalSkills}
        />
        <div className="flex">
          <CustomButton
            onClick={submitFunction}
            value={editUserState > -1 ? "Save Changes" : "Submit"}
          />
          <CustomButton onClick={resetFunction} value="Reset" />
        </div>
        <Link href={"/screens/user-list"} className="text-blue-500">
          Click to view all saved data
        </Link>
      </div>
    </main>
  );
};
export default Main;
