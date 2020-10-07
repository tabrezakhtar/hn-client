import React from 'react';

function StoriesList({stories, error}) {

  if(error) {
    return <li>{error}</li>
  }

  return stories.length ? stories.map(story => 
    
  ) : null;
}

export default StoriesList;