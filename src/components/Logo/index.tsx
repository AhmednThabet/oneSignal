import Image from "next/image";
import type { LogoType } from "components/types";

const Logo: LogoType = ({
  src = "/logo.png",
  alt = "Talents Valley Logo",
  ...rest
}) => {
  return <Image alt={alt} src={src} width={120} height={60} {...rest} />;
};

export default Logo;
