import React from 'react';
import StoryItem from './StoryItem';

function StoriesList({stories}) {
  const storiesList = stories.length ? stories.map((story, index) => 
    <StoryItem key={story.objectID} story={story} index={index}/>
  ) : null;

  return <ul className="collection">{storiesList}</ul>
}

export default StoriesList;