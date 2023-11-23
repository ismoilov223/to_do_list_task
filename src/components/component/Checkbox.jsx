// CheckboxWithTailwind.js
import React, { useState } from 'react';
import { MdCheck } from 'react-icons/md';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <span className="ml-2 text-gray-700">Check me</span>
      {isChecked && <MdCheck className="ml-2 text-green-500" />}
    </label>
  );
};

export default Checkbox;
