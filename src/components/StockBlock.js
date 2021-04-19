import React, {useState} from "react";

function StockBlock(props) {

  const [showContent, setVisible] = useState(false);

  function handleClick() {
    setVisible(!showContent);
  }

  return(
    <div onClick={handleClick} className="note">
      <img style={{width:"40px", height:"40px"}} src={props.Image} alt="Logo"/>
      <h1>{props.Name}</h1>
      <h4>{props.Symbol}</h4>
      { showContent && (
        <p>{
          props.description
          }</p>
        )
      }
    </div>
  );
}

export default StockBlock;
