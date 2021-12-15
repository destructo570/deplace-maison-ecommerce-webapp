import React from "react";
import { StyledLabel, StyledTextInput, StyledInput } from "./styledComponents";

const TextInput = React.forwardRef((props, ref) => {
  return (
    <StyledTextInput>
      <StyledLabel name={props.name}>{props.label}</StyledLabel>
      <StyledInput
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        ref={ref}
      ></StyledInput>
    </StyledTextInput>
  );
});

export default TextInput;
