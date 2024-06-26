import EventSlider from "@/components/events/events-slider";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Event Slider  | CrescentCanada - Helping Hands",
};
const index = () => {
  return (
    <Wrapper>
      <EventSlider />
    </Wrapper>
  );
};

export default index;
