import AvatarWrapper from "./style";

type AvatarProps = {
  name: string;
  src: string;
  size: "sm" | "md" | "lg";
  title?: string;
  onClick?: () => void;
};

const Avatar = (props: AvatarProps) => {
  const { name, src, size, onClick, title } = props;

  let widthHeight: "72px" | "48px" | "33px";

  switch (size) {
    case "sm":
      widthHeight = "33px";
      break;

    case "lg":
      widthHeight = "72px";
      break;

    default:
      widthHeight = "48px";
  }

  return (
    <AvatarWrapper widthHeight={widthHeight} onClick={onClick} title={title}>
      <img src={src} alt={name} />
    </AvatarWrapper>
  );
};

export default Avatar;
