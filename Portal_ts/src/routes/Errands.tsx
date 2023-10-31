import React from "react";
import { useEffect, useState } from "react";

export default function Errands() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch("http://localhost:3000");
      const json = await response.json();
      console.log(json);
    }
    fetchApi();
  }, []);

  return (
    <>
      <h1>Errands</h1>
    </>
  );
}
