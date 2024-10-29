import program1 from "../assets/edusity/program-1.png";
import program2 from "../assets/edusity/program-2.png";
import program3 from "../assets/edusity/program-3.png";
import "./Programs.css";
import programIcon1 from "../assets/edusity/program-icon-1.png";
import programIcon2 from "../assets/edusity/program-icon-2.png";
import programIcon3 from "../assets/edusity/program-icon-3.png";

function Programs() {
  return (
    <div className="Programs">
      <div className="Program">
        <img src={program1} alt=""></img>
        <div className="caption">
          <img src={programIcon1} alt=""></img>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="Program">
        <img src={program2} alt=""></img>
        <div className="caption">
          <img src={programIcon2} alt=""></img>
          <p>Graduation Masters</p>
        </div>
      </div>
      <div className="Program">
        <img src={program3} alt=""></img>
        <div className="caption">
          <img src={programIcon3} alt=""></img>
          <p>Graduation PHD</p>
        </div>
      </div>
    </div>
  );
}
export default Programs;
