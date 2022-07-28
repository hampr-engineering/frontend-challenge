import ButtonWrapper from "./style";
import IconCheck from "./IconCheck";

export type ButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { children, active, onClick } = props;

  return (
    <ButtonWrapper active={active} onClick={onClick}>
      {active && <IconCheck />}
      <span>{children}</span>
    </ButtonWrapper>
  );
};

export default Button;
