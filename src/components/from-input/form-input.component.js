import "./form-input.styles.scss";

const FormInput = ({ label, inputDetails }) => {
  return (
    <div className="group">
        <input className="form-input" {...inputDetails}></input>
        { label && 
      <label
        className={`${
          inputDetails.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
      }
    </div>
  );
};

export default FormInput;
