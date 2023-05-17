import { createContext, useContext, useState } from 'react';

const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <TestContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => useContext(TestContext);
