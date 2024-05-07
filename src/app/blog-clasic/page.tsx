import BlogClasic from "@/components/blogs/blog-clasic";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Blog Clasic  | CrescentCanada - Helping Hands",
};
const index = () => {
  return (
    <Wrapper>
      <BlogClasic />
    </Wrapper>
  );
};

export default index;
