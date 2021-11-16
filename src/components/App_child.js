import React from 'react';

const App_child = (props) => {

	var cop = props.data
	return(
		<>
	<div className="row row-cols-3">
	  <div className="col">
				{cop[0]} 
	  </div>
	    <div className="col">
			{cop[1]}
	  </div>
	   <div className="col">
	   {cop[2]}
	  </div>
	   <div className="col">
	   {cop[3]}
	  </div>  
	  </div>
	  </>
	)

}

export default App_child ;