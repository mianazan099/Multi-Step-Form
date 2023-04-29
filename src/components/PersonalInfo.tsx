import Heading from "./Heading";
import { useState } from "react";

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  updateFields: (value: string) => void;
};

function Input({ name, type, placeholder, value, updateFields }: InputProps) {
  const [valid, setValid] = useState(true);
  return (
    <div className="text-sm">
      <div className="mb-1 flex justify-between">
        <p className="text-marineBlue">{name}</p>
        <p className={`font-medium text-strawberryRed ${valid && "hidden"}`}>
          This field is required
        </p>
      </div>
      <input
        className={`h-12 w-full text-marineBlue rounded-md border-lightGray focus:ring-purplishBlue focus:border-purplishBlue ${!valid &&
          "border-strawberryRed focus:ring-strawberryRed focus:border-strawberryRed"
          }`}
        type={type}
        placeholder={placeholder}
        value={value}
        onInput={(e) => {
          let value = (e.target as HTMLTextAreaElement).value;
          updateFields(value);
          setValid(!(value === ""));
        }}
        required
      />
    </div>
  );
}

type PersonalData = {
  name: string;
  email: string;
  number: string;
};

type PersonalDataProps = PersonalData & {
  updateFields: (fields: Partial<PersonalData>) => void;
};

export default function PersonalInfo({
  name,
  email,
  number,
  updateFields,
}: PersonalDataProps) {
  function updateInputField(input: string) {
    return function (value: string) {
      updateFields({ [input]: value });
    };
  }

  return (
    <>
      <Heading
        title={"Personal info"}
        description={
          "Please provide your name, email address, and phone number."
        }
      />
      <div className="space-y-6">
        <Input
          name={"Name"}
          type={"text"}
          placeholder={"e.g. Stephen King"}
          value={name}
          updateFields={updateInputField("name")}
        />
        <Input
          name={"Email Address"}
          type={"email"}
          placeholder={"e.g. stephenking@lorem.com"}
          value={email}
          updateFields={updateInputField("email")}
        />
        <Input
          name={"Phone Number"}
          type={"tel"}
          placeholder={"e.g. +1234567890"}
          value={number}
          updateFields={updateInputField("number")}
        />
      </div>
    </>
  );
}
