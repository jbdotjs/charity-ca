import Volunteers from "@/components/inner-pages/volunteers";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Volunteers  | CrescentCanada - Helping Hands",
};
const index = () => {
  return (
    <Wrapper>
      <Volunteers />
    </Wrapper>
  );
};

export default index;
