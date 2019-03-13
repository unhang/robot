import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div>
			<input 
				onChange = {searchChange}
				className = 'pa3 ba b--green bg-ligtest-blue'
				type='search'
				placeholder='search robot'
			/>
		</div>
	);	
} 

export default SearchBox;