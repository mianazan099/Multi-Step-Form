import Image from "next/image";

export default function ThankYou() {
  return (
    <>
      <div className="text-center">
        <Image
          src="images/icon-thank-you.svg"
          alt="Thank You Icon"
          width="56"
          height="56"
          className="mx-auto mb-5 lg:mb-8 lg:w-20 lg:h-20"
        />
        <h1 className="font-bold text-2xl text-marineBlue mb-3 lg:text-[32px] lg:mb-4">
          Thank you!
        </h1>
        <p className="text-coolGray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  );
}
