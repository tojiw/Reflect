// SelectionContext.js
import React, { createContext, useState, useContext } from 'react';

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);
  const [circleColor, setCircleColor] = useState('#FF0000'); // Default red

  return (
    <SelectionContext.Provider value={{ isSelecting, setIsSelecting, selectedWords, setSelectedWords, circleColor, setCircleColor }}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);