import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./analytics.css";
import { userData } from "../../dummyData";

import { Typography } from "@material-ui/core";

export default function Analytics() {
  return (
    <div className="home">
        <Typography variant='h3'>ANALYTICS</Typography>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <Chart data={userData} title="Product Analysis" grid dataKey="Active User"/>
      <Chart data={userData} title="Customer Analysis" grid dataKey="Active User"/>
      <Chart data={userData} title="Transaction Analysis" grid dataKey="Active User"/>
      <div className="homeWidgets">
        
      </div>
    </div>
  );
}
