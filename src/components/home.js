import React from "react";

const Company = (props) => {
  var details = props.data;

    return(
        <>
      <div>
        {details.map((data, key) => {
          return (
            <div key={key}>
              {data.name +
                " , " +
                data.location +
                " ," +
                data.department}
            </div>
          );
        })} 
</div>
</>
    )
}
export default Company;