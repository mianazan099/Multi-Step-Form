export default function Input({
  name,
  type,
  placeholder,
}: {
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="text-sm">
      <div className="mb-1 flex justify-between">
        <p className="text-marineBlue">{name}</p>
        <p className="font-medium text-strawberryRed">This field is required</p>
      </div>
      <input
        className="h-12 w-full rounded-md border-lightGray focus:border-purplishBlue "
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
