import { useState } from "react";

import "./FloatingButton.scss";
import { Link} from "react-router-dom";

const FloatingButton = (props) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  return (
    <div className="buttonContainer" onBlur={setUnchecked}>
      <input
        type="checkbox"
        id="toggle"
        className={checked ? "checked" : ""}
        onClick={handleClick}
      />
      <label className="button" htmlFor="toggle"></label>
      <nav className="nav">
        <ul>
          <span><Link to="/Todo">Todo</Link></span>
          <span><Link to="/About">About</Link></span>
          <span onClick={()=> props.logout()}>Logout</span>
        </ul>
      </nav>
      
    </div>

  );
};
export default FloatingButton;
