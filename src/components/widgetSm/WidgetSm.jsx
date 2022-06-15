import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/76/85/men-faceless-profile-vector-13567685.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">SHABBIR</span>
            <span className="widgetSmUserTitle">Karachi</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/76/85/men-faceless-profile-vector-13567685.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">MANZOOR</span>
            <span className="widgetSmUserTitle">Hyderabad</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/76/85/men-faceless-profile-vector-13567685.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">AKHTER</span>
            <span className="widgetSmUserTitle">Kashmir</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/76/85/men-faceless-profile-vector-13567685.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">HAJI SALMAN </span>
            <span className="widgetSmUserTitle">Quetta</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/76/85/men-faceless-profile-vector-13567685.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">JAWAD</span>
            <span className="widgetSmUserTitle">larkana</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
