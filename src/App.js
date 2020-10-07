import React, {useState, useEffect} from 'react';
import StoriesList from './stories/StoriesList';

const TOP_STORIES = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

function App() {

  const [stories, setStories] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(TOP_STORIES + '&page=' + pageNum);
        const {hits} = await result.json()
        setStories(hits);
        setLoading(false)
      } catch(error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [pageNum]);

  if(error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <React.Fragment>
      <StoriesList stories={stories} />
    </React.Fragment>
  );
}

export default App;
