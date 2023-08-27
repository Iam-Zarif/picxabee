import React from 'react';
import ContentLoader from 'react-content-loader'

const StoryLoading = props => (
    <ContentLoader
    //   width={500}
    width='fit'
      height={100}
    //   viewBox="0 0 500 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
      className='space-x-2'
    >
      <circle cx="46" cy="44" r="44" />
      {/* <rect x="34" y="83" rx="5" ry="5" width="25" height="10" /> */}
      {/* <rect x="547" y="222" rx="5" ry="5" width="220" height="10" /> */}
      {/* <rect x="82" y="150" rx="5" ry="5" width="220" height="10" /> */}
      
      <circle cx="157" cy="44" r="44" />
      {/* <rect x="124" y="83" rx="5" ry="5" width="25" height="10" /> */}

      <circle cx="267" cy="44" r="44" />
      {/* <rect x="217" y="83" rx="5" ry="5" width="25" height="10" /> */}

      <circle cx="377" cy="44" r="44" />
      {/* <rect x="308" y="83" rx="5" ry="5" width="25" height="10" /> */}

      <circle cx="487" cy="44" r="44" />
      {/* <rect x="398" y="83" rx="5" ry="5" width="25" height="10" /> */}

      <circle cx="597" cy="44" r="44" />
      {/* <rect x="486" y="83" rx="5" ry="5" width="25" height="10" /> */}

      <circle cx="707" cy="44" r="44" />
      {/* <rect x="600" y="83" rx="5" ry="5" width="25" height="10" /> */}

      <circle cx="817" cy="44" r="44" />
      {/* <rect x="664" y="83" rx="5" ry="5" width="25" height="10" /> */}

    </ContentLoader>
  )

export default StoryLoading;