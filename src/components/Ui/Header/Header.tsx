import HeaderWrapper from "./style";

type HeaderProps = {
  logoSrc: string;
};

const Header = (props: HeaderProps) => {
  const { logoSrc } = props;

  return (
    <HeaderWrapper>
      <img className="logo" alt="Brand identity" src={logoSrc} />
    </HeaderWrapper>
  );
};

export default Header;
