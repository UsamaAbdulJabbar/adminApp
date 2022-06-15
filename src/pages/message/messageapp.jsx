import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { Typography } from "@material-ui/core";
import Chats from "../../components/chats";

export default function Message() {
  return (
    <div className="home">
      <Typography variant='h3'>Messages</Typography>
      
      <Chats/>
     
    </div>
  );
}
