import InnerAbout from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "About  | CrescentCanada - Helping Hands",
};
const index = () => {
  return (
    <Wrapper>
      <InnerAbout />
    </Wrapper>
  );
};

export default index;
