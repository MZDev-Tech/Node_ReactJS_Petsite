import React, { createContext } from 'react';
import PetData from '../Database/PetData';

export const PetsContext = createContext(null);

const PetsContextProvider = (props) => {
  const contextValue = { PetData };

  return (
    <PetsContext.Provider value={contextValue}>
      {props.children}
    </PetsContext.Provider>
  );
};

export default PetsContextProvider;



// above we are using context api that help to pass pets data between component which can't easily share with props
// Difference b/w context api and useContext 
// usecontext is part of context api before this we use create context, provider and consumer(to consume data) 
// but consumer part was very complex so in place of it now we use UseContext Hook as consumer part
//The use of props.children ensures that any components nested inside PetsContextProvider can access and utilize the context data (PetData).