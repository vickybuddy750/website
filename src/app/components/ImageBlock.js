import Image from "next/image";

export const ImageBlock = ({ imgPath }) => {
  console.log(imgPath);
  return (
    <div className=" bg-slate-50  inline-block">
      <div className="relative rounded-lg w-80 h-80">
        <Image
          alt={`${imgPath}`}
          src={`/1.jpeg`}
          //   width={0}
          //   height={0}
          fill={true}
        />
      </div>
    </div>
  );
};
