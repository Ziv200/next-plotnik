"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { PlanObjectType } from "./types";

interface PlanDetailsType {
  id: string;
  name: string;
  description: string;
  band_name: string;
  planObjects: PlanObjectType[];
}

interface PlanContextType {
  planDetails: PlanDetailsType;
  addNewObject: (object: PlanObjectType) => void;
  removeObject: (id: string) => void;
  selectedObject: PlanObjectType | null;
  chooseSelectedObject: (object: PlanObjectType) => void;
}

// Create a context
const PlanContext = createContext<PlanContextType | undefined>(undefined);
// Create a provider component that wraps your app and makes theme context available to any child component that calls useTheme()
export const PlanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [planDetails, setPlanDetails] = React.useState<PlanDetailsType>({
    id: "1",
    name: "new plan",
    description: "new plan",
    band_name: "kapaim",
    planObjects: [],
  });

  const [selectedObject, setSelectedObject] = React.useState<PlanObjectType | null>(null);

  //selected object functions
  const chooseSelectedObject = (object: PlanObjectType) => {
    const findObject = planDetails.planObjects.find((prevObject) => prevObject.id === object.id);
    setSelectedObject(findObject ? findObject : null);
  };

  const changeObjectInputPropety = (id: string, propetyKey: string, value: number) => {};

  //planObjects functions

  const addNewObject = (object: PlanObjectType) => {
    setPlanDetails((prevPlanDetails) => {
      return {
        ...prevPlanDetails,
        planObjects: [...prevPlanDetails.planObjects, object],
      };
    });
  };

  //filter the planObjects by id and set the selectedObject to null if the id matches
  const removeObject = (id: string) => {
    const filteredObjects = planDetails.planObjects.filter((object) => object.id !== id);
    setPlanDetails((prevPlanDetails) => {
      setSelectedObject((prevSelectedObject) => {
        return prevSelectedObject?.id === id ? null : prevSelectedObject;
      });
      return {
        ...prevPlanDetails,
        planObjects: filteredObjects,
      };
    });
  };

  return (
    <PlanContext.Provider
      value={{
        planDetails,
        addNewObject,
        removeObject,
        selectedObject,
        chooseSelectedObject,
      }}>
      {children}
    </PlanContext.Provider>
  );
};

// Create a custom hook to access the theme context
export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
