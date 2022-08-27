import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecndForm from "./SecndForm";

function Regsiter() {
  const [steps, setSteps] = useState("2");
  switch (steps) {
    case "1":
      return <FirstForm />;

    case "2":
      return <SecndForm />;
  }
}

export default Regsiter;
