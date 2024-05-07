import EventDetails from "@/components/events/event-details";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Event Details  | CrescentCanada - Helping Hands",
};
const index = () => {
  return (
    <Wrapper>
      <EventDetails />
    </Wrapper>
  );
};

export default index;
