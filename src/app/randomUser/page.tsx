"use client";

import { useState } from "react";
import axios from "axios";

export default function RandomUserPage() {
  //user = null or object
  const [user, setUser] = useState<any>(null);

  const generateBtnOnClick = async () => {
    const resp = await axios.get(`https://randomuser.me/api`);
    const user = resp.data.results[0];
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      <p className="display-4 text-center fst-italic m-4">User Generator</p>
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        <button className="btn btn-dark" onClick={generateBtnOnClick}>
          Generate
        </button>
      </div>
      {
        // <p className="display-6 text-center fst-italic my-4">Loading ...</p>
      }
      {/* display User information after finish loading */}
    </div>
  );
}
