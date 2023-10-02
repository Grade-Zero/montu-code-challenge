import React from "react";
import styled from '@emotion/styled';
import {
  Gif,
  getItemFromStorage,
  checkItemInStorage,
  saveItemInStorage,
  QUERY_LIMIT,
  giphyFetchTrending,
  ITEM_KEY,
} from "../../utils";
import { Loading, Grid, GridItem, Button, Error } from "../../components";

const TrendingContainer = styled.div``;

const Home: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [gifs, setGifs] = React.useState<Gif[] | null>(null);
  const [totalLimit, setTotalLimit] = React.useState<number | null>(null);
  const [offset, setOffset] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const fetchTrending = async(offset: number = 0) => {
    setError(null);
    setMessage(null);
    if (!gifs || !totalLimit || totalLimit !== null && gifs.length <= totalLimit) {
      setLoading(true);
      try {
        const result = await giphyFetchTrending(offset);
        const { data, pagination } = result;
        const images = gifs ? gifs.concat(data) : data;
        setGifs(images);
        setTotalLimit(pagination.total_count);
        saveItemInStorage(ITEM_KEY.TRENDING_KEY, images);
      } catch (e) {
        setError('Error fetching GIFs, please try again');
        console.warn(e);
      }
    } else {
      setMessage('No trending GIFs left to display');
    }
    setLoading(false);
  }

  const handleLoadMore = async () => {
    const updatedOffset = offset + QUERY_LIMIT;
    setOffset(updatedOffset);
    saveItemInStorage(ITEM_KEY.OFFSET_KEY, updatedOffset);
    fetchTrending(updatedOffset);
  }

  const clearStorage = () => {
    localStorage.clear();
    location.reload();
  }

  React.useEffect(() => {
    if (checkItemInStorage(ITEM_KEY.OFFSET_KEY)) {
      setOffset(getItemFromStorage(ITEM_KEY.OFFSET_KEY));
    }
  
    if (checkItemInStorage(ITEM_KEY.TRENDING_KEY)) {
      const stored = getItemFromStorage(ITEM_KEY.TRENDING_KEY);
      setGifs(stored);
    } else {
      fetchTrending();
    }
  }, []);

  return (
    <TrendingContainer>
      <h2>Trending GIFs</h2>
      <Button onClick={() => clearStorage()}>Clear stored results</Button>
      {gifs?.length && (
        <>
          <Grid>
            {gifs.map((g: Gif, index: number) => (
              <GridItem key={`${g.id}-${index}`}>
                <div>
                  <img src={g.images.fixed_width.url} />
                </div>
              </GridItem>
            ))}
          </Grid>
          <Button onClick={() => handleLoadMore()} disabled={loading}>
            {loading ? "Loading more..." : "Load more"}
          </Button>
        </>
      )}
      {loading && <Loading />}
      {message && <h3>{message}</h3>}
      {error && (
        <Error>
          <h3>{error}</h3>
        </Error>
      )}
    </TrendingContainer>
  );
}

export { Home };