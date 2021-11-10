import React from "react";
import "./App.css";
import {
  Grid,
  GridItem,
  Text
} from "@chakra-ui/react";

import AllSection from "./comp/AllSection";
function App() {
  return (
    <div
    className="AppRoot"
    >
      <Text fontSize='x-large' color="gray">Teacher</Text>
      <div className="App p-4">
      <Grid
        className="formGrid"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(20, 1fr)"
      >
        <GridItem colStart={2} colEnd={20} className="m-2">
          <AllSection/>
        </GridItem>
      </Grid>
    </div>
    </div>
  );
}

export default App;
