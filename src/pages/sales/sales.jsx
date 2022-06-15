import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./sales.css";
import { userData } from "../../dummyData";

import { Typography } from "@material-ui/core";
import Tables from "../../components/table";

export default function Sales() {
  return (
    <div className="home">
        <Typography variant='h3'>Sales</Typography>
      <FeaturedInfo />
      
      <Tables/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        
      </div>
    </div>
  );
}
