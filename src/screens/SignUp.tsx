import ButtonComponent from "../components/ButtonComponent";
import TextField from "../components/TextField";
import { SignupTextFieldData } from "../data/LoginTextFieldData";
import type { LoginDetails } from "../interfaces/LoginTextField";

const Signup = () => {
  return (
    <div className="w-full h-screen flex">
      {/* Image Div */}
      <div className="h-full w-full bg-[url('/images/mainimg.png')] bg-cover bg-no-repeat bg-top-right lg:inline md:inline sm:hidden max-[640px]:hidden  "></div>

      {/* Input Fields Div */}
      <div className="w-full h-full flex flex-col items-center gap-3 justify-center  ">
        <h1 className="font-bold text-[46px] ">Signup</h1>
        <p className="text-[18px] text-[#818181] pb-2">
          Signup your account in a seconds
        </p>

        {/* Text Field Div */}
        <div className="flex  flex-col gap-2 pb-4">
          {SignupTextFieldData.map(({ label, placeholder }: LoginDetails) => (
            <TextField
              label={label}
              placeholder={placeholder}
              className="border-1 p-3 w-80 rounded-xl border-[#818181]"
            />
          ))}
        </div>

        {/* Login Buttom  */}
        <ButtonComponent
          text="Signup"
          className="cursor-pointer pb-3 pt-3 pl-30 pr-30 text-white rounded-t-[50px] rounded-b-[50px] bg-black lg:text-[20px] font-[700] max-[1207px]:text-[18px]"
        />

        {/* SignUp Option */}
        <div className="flex gap-2">
          <p className="text-[17px] text-[#818181] pt-3">
            Already have an acoound ?
          </p>
          <p className="text-[18px] text-black pt-3 cursor-pointer">Login</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
