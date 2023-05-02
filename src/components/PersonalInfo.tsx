import Heading from "./Heading";
import { useEffect, useState } from "react";

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  updateValue: (value: string) => void;
};

function Input({ name, type, placeholder, value, updateValue }: InputProps) {
  const [valid, setValid] = useState(true);
  useEffect(() => {
    if (value === "") setValid(false);
    else if (value === "yweyertyfdhskadagwertsldkdgwuetwerlsgfliwetrtwe")
      updateValue("");
  }, []);
  return (
    <div className="text-sm">
      <div className="mb-1 flex justify-between">
        <p className="text-marineBlue">{name}</p>
        <p className={`font-medium text-strawberryRed ${valid && "hidden"}`}>
          This field is required
        </p>
      </div>
      <input
        className={`
          h-12 w-full rounded-md border-lightGray text-marineBlue focus:border-purplishBlue focus:ring-purplishBlue
          ${
            !valid &&
            "border-strawberryRed focus:border-strawberryRed focus:ring-strawberryRed"
          }
        `}
        type={type}
        placeholder={placeholder}
        value={value}
        onInput={(e) => {
          let value = (e.target as HTMLTextAreaElement).value;
          updateValue(value);
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
          updateValue={updateInputField("name")}
        />
        <Input
          name={"Email Address"}
          type={"email"}
          placeholder={"e.g. stephenking@lorem.com"}
          value={email}
          updateValue={updateInputField("email")}
        />
        <Input
          name={"Phone Number"}
          type={"tel"}
          placeholder={"e.g. +1234567890"}
          value={number}
          updateValue={updateInputField("number")}
        />
      </div>
    </>
  );
}
