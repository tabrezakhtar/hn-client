import React, {useState, useEffect} from 'react';
import ShowsList from './shows/ShowsList';

const TOP_STORIES = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
const STORY = 'https://hn.algolia.com/api/v1/items/24705414';
function App() {

  const [stories, setStories] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(TOP_STORIES);
        const stories = await result.json()
        setStories(stories);
        setLoading(false)
      } catch(error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading</div>
  }

  return <StoriesList shows={stories} />
}

export default App;
