import React from "react";
import { giphySearch, Gif } from "../../utils";
import { Loading } from "../../components/Loading";
import { Button, Grid, GridItem, Input, Error } from "../../components";

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);
  const [searching, setSearching] = React.useState<boolean>(false);
  const [searchResults, setSearchResults] = React.useState<Gif[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async () => {
    setError(null);
    if (searchQuery && searchQuery.length >= 3) {
      setSearching(true);
      try {
        const result = await giphySearch(searchQuery);
        const { data } = result;
        setSearchResults(data);
      } catch (e) {
        setError('Error fetching search results, please try again');
        console.warn(e);
      }
      setSearching(false);
    }
  };

  return (
    <>
      <h2>Search GIFs</h2>
      <Input
        disabled={searching}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e)
        }
      />
      <Button
        onClick={() => handleSubmit()}
        disabled={searching || !searchQuery || searchQuery?.length < 3}
      >
        Search
      </Button>
      {searching && <Loading />}
      {error && (
        <Error>
          <h3>{error}</h3>
        </Error>
      )}
      {searchResults && searchResults.length && !searching && (
        <Grid>
          {searchResults.map((g: Gif) => (
            <GridItem key={g.id}>
              <div>
                <img src={g.images.fixed_width.url} />
              </div>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
}

export { Search };