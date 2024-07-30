import React from 'react'
import StarIcon from "@mui/icons-material/Star";

function Stars() {
    const reviewStyle = {
        fontSize:"16px",
        color:"#8b3eea"
      }
  return (
    <>
     <StarIcon style={reviewStyle}/>
                  <StarIcon style={reviewStyle}/>
                  <StarIcon style={reviewStyle}/>
                  <StarIcon style={reviewStyle}/>
                  <StarIcon style={reviewStyle}/> 
    </>
  )
}

export default Stars
