"use client";

import { useState } from "react";
import axios from "axios";
import UserCard from "@/components/UserCard";
import { cleanUser } from "@/libs/cleanUser";

export default function RandomUserPage() {
  //user = null or object
  const [user, setUser] = useState<any>(null);
  const [IsLoading, setIsLoading] = useState(false);
  const generateBtnOnClick = async () => {
    setIsLoading(true);
    const resp = await axios.get(`https://randomuser.me/api`);
    setIsLoading(false);
    const user = resp.data.results[0];
    const cleanedUser = cleanUser(user);
    setUser(cleanedUser);
  };
  //setUser({name:"Jhon", email:"Jhon@email.com", imgUrl:"http://hello.com", address:"123 hello st."})

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      <p className="display-4 text-center fst-italic m-4">User Generator</p>
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        <button className="btn btn-dark" onClick={generateBtnOnClick}>
          Generate
        </button>
      </div>
      {
        IsLoading && <p className="display-6 text-center fst-italic my-4">Loading ...</p>
      }
      {/* display User information after finish loading */}
      {user && !IsLoading && <UserCard {...user} />}
    </div>
  );
}
