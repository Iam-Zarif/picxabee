import React from 'react';

const Container = ({ children }) => {
	return (
		<div>
			<div className="max-w-[1450px] mx-auto">{children}</div>
		</div>
	);
};

export default Container;
