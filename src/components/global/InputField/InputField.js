import { StyledInputField } from "./styledComponents";

function InputField(props) {
  return (
    <StyledInputField>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
      <button>{props.ctaTitle}</button>
    </StyledInputField>
  );
}

export default InputField;
