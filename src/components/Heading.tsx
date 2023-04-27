export default function Heading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="pb-10">
      <h1 className="mb-2 text-[clamp(1.50rem,calc(1.32rem+0.75vw),2.00rem)] font-bold text-marineBlue">
        {title}
      </h1>
      <p className="text-coolGray">{description}</p>
    </div>
  );
}
