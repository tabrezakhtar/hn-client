import React from 'react';
import Story from './Story';

function StoriesList({stories}) {
  return stories.length ? stories.map(story => 
    <Story story={story} />
  ) : null;
}

export default StoriesList;