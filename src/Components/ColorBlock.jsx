import React from "react";
import "./colorblock.css"
class ColorBlock extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return(

      <div className="color-block"
      style={{
        backgroundColor:this.props.color
      }}
        onClick={() => {
          this.props.onClick(this.props.color)
        }}
      >
        </div>
    )
  }
}
export default ColorBlock;