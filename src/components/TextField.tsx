import type { LoginDetails } from "../interfaces/LoginTextField";

const TextField = ({ label, placeholder, className }: LoginDetails) => {
  return (
    <>
      <label className="text-[#818181] pt-5" htmlFor="login ">
        {label}
      </label>
      <input className={`${className}`} type="text" placeholder={placeholder} />
    </>
  );
};

export default TextField;
