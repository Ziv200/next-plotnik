"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { objectType } from "./types";

interface planDetailsType {
  id: string;
  name: string;
  description: string;
  band_name: string;
}

interface PlanContextType {
  planDetails: { name: string };
  planObjects: objectType[];
  addNewObject: (object: objectType) => void;
  removeObject: (id: string) => void;
  selectedObject: objectType | null;
  chooseSelectedObject: (object: objectType) => void;
}

// Create a context
const PlanContext = createContext<PlanContextType | undefined>(undefined);
// Create a provider component that wraps your app and makes theme context available to any child component that calls useTheme()
export const PlanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [planDetails, setPlanDetails] = React.useState<planDetailsType>({
    id: "1",
    name: "new plan",
    description: "new plan",
    band_name: "kapaim",
  });

  const [planObjects, setPlanObjects] = React.useState<objectType[]>([]);
  const [selectedObject, setSelectedObject] = React.useState<objectType | null>(null);

  //selected object functions
  const chooseSelectedObject = (object: objectType) => {
    const findObject = planObjects.find((prevObject) => prevObject.id === object.id);
    setSelectedObject(findObject ? findObject : null);
  };

  //planObjects functions
  const addNewObject = (object: objectType) => {
    setPlanObjects([...planObjects, object]);
  };

  //filter the planObjects by id and set the selectedObject to null if the id matches
  const removeObject = (id: string) => {
    setPlanObjects((prevObjects) => {
      const filteredObjects = prevObjects.filter((object) => object.id !== id);

      setSelectedObject((prevSelectedObject) => {
        return prevSelectedObject?.id === id ? null : prevSelectedObject;
      });

      return filteredObjects;
    });
  };

  return (
    <PlanContext.Provider
      value={{
        planDetails,
        planObjects,
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
