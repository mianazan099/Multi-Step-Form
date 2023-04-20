import {useState} from 'react'

export default function Input({
  name,
  type,
  placeholder,
}) {
  const [input, setInput] = useState('');
  return (
    <div className="text-sm">
      <div className="mb-1 flex justify-between">
        <p className="text-marineBlue">{name}</p>
        <p className="font-medium text-strawberryRed">This field is required</p>
      </div>
      <input
        className="h-12 w-full rounded-md border-lightGray focus:border-purplishBlue "
        type={type}
        onInput={(e)=>setInput(e.target.value)}
        value={input}
        placeholder={placeholder}
      />
    </div>
  );
}
