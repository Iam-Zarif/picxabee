import React from 'react';

const Container = ({children}) => {
    return (
        <div>
      <div className="w-full lg:max-w-[1480px] mx-auto">{children}</div>
    </div>
    );
};

export default Container;