import React from 'react';

function Story({story}) {
  return <li key={story.objectID}><a href={'/comments/' + story.objectID}>{story.title}</a></li>;
}

export default Story;