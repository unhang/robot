import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{ overflowY: 'scroll', height: '800px', border:'4px solid gray'}}>
			{props.children}
		</div>
	);
}

export default Scroll;