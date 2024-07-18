import React from "react";
import PropTypes from 'prop-types';

const GenderCheckbox = ({handleChange}) => {
  const handleCheckbox = (e) => {
    if(e.target.value === "male") {
      document.getElementById("female").checked = false;
    } else {
      document.getElementById("male").checked = false;
    }
    handleChange(e);
  }

  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="checkbox" name="gender" id="male" value="male" className="checkbox border-slate-900" onChange={(e) => handleCheckbox(e)} />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="checkbox" name="gender" id="female" value="female" className="checkbox border-slate-900" onChange={(e) => handleCheckbox(e)} />
        </label>
      </div>
    </div>
  );
};

GenderCheckbox.protoTypes = {
  handleChange: PropTypes.func
}

export default GenderCheckbox;
