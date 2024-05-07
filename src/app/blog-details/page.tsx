import BlogDetails from "@/components/blogs/blog-details";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Blog Details  | CrescentCanada - Helping Hands",
};
const index = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
