import type { LoginButtonDetails } from "../interfaces/LoginTextField";

const ButtonComponent = ({ className, text }: LoginButtonDetails) => {
  return <button className={`${className}`}>{text}</button>;
};

export default ButtonComponent;
