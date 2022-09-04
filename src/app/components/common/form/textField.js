import React, { useState } from "react";
// import { TextInput } from "flowbite-react";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <div className="block mb-2">
        <label htmlFor={name}>{label}</label>
        <div className="flex">
          <input
            type={showPassword ? "text" : type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-[2px] focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
          />
          {type === "password" && (
            <button
              type="button"
              onClick={toggleShowPassword}
              className="p-2.5 text-sm font-medium text-white bg-[#417b9c] border border-[#417b9c] rounded-r-[2px] hover:bg-[#265b8d] focus:ring-2 focus:outline-none focus:ring-[#265b8da9]"
            >
              <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
            </button>
          )}
        </div>
      </div>

      {error && <div className="text-red-800">{error}</div>}
    </div>
  );
};

export default TextField;
