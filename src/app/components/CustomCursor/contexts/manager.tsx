"use client"

import React, { ReactNode, useState } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "../contexts/CustomCursorContext";

const CustomCursorManager = ({ children }: { children: ReactNode}) => {
  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;