import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useMobile = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: `(max-width: 767px)`,
  });

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  return mobile;
};

export default useMobile;
