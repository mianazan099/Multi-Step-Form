import { useId } from "react";

const Input = ({ name, type, placeholder }) => {
  const id = useId();
  return (
    <div>
      <label className="mb-0.25 text-sm text-blue-marine" htmlFor={id}>
        {name}
      </label>
      <input
        className="w-full rounded border-gray-light placeholder:text-gray-cool"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
