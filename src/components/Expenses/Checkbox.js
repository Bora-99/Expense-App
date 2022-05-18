import React, { useState } from "react";
import "./Checkbox.css";

function Checkbox ( props )
{ 
    
  const [checked, setChecked] = useState(false);

    const handleChange = () =>
    {  
      
        setChecked( !checked );
  };

  return (
    <div className="checkbox-container">
      <input type="checkbox" onChange={handleChange} />
      <label>Checkbox</label>
    </div>
  );
}

export default Checkbox;
