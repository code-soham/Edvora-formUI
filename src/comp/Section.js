import { FormControl, Input,Text, Textarea, Checkbox } from "@chakra-ui/react";
import React from "react";
import AllQ from "./AllQ";
export default function Section() {
  return (
    <React.Fragment>
      <div className="sectionHeader">
        <FormControl>
          <Input variant="flushed" placeholder="Section Name"></Input>
          <Textarea size="sm" variant="filled" resize="none" placeholder="Section Description"></Textarea>
          <Checkbox colorScheme="orange" ><Text color="brown">Shuffle Questions</Text></Checkbox>
        </FormControl>
      </div>
      <AllQ />
    </React.Fragment>
  );
}
