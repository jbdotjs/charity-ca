import NotFound from "@/components/inner-pages/error";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "404 || CrescentCanada - Helping Hands",
};
const index = () => {
  return (
    <Wrapper>
      <NotFound />
    </Wrapper>
  );
};

export default index;
