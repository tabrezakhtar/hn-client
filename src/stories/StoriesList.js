import React from 'react';
import Story from './Story';

function StoriesList({stories}) {
  const storiesList = stories.length ? stories.map((story, index) => 
    <Story key={story.objectID} story={story} index={index}/>
  ) : null;

  return <ul className="collection">{storiesList}</ul>
}

export default StoriesList;