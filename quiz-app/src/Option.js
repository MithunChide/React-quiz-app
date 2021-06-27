import React from "react";

function Option({children,...rest}){

    return(
      <button{...rest}>{children}</button>
    )
}

export default Option;