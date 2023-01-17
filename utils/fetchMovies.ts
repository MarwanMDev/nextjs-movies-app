import { GraphQLClient, gql } from 'graphql-request';

const fetchMovies = async () => {
  const GET_QUERY = gql`
    query myQuery($api_key: String) {
      myQuery(api_key: $api_key) {
        dates {
          maximum
          minimum
        }
        page
        results {
          adult
          backdrop_path
          genre_ids
          id
          original_language
          original_title
          overview
          popularity
          poster_path
          release_date
          title
          video
          vote_average
          vote_count
        }
        total_pages
        total_results
      }
    }
  `;

  const client = new GraphQLClient(
    'https://gbadolite.stepzen.net/api/hardy-stoat/__graphql'
  );

  const variables = {
    api_key: process.env.MOVIE_DB_API_KEY,
  };

  const requestHeaders = {
    Authorization: `apikey ${process.env.ZTEPZEN_API_KEY}`,
  };

  const data = await client.request(
    GET_QUERY,
    variables,
    requestHeaders
  );
  console.log(data);

  const moviesResponse = await data.json();

  return moviesResponse;
};

export default fetchMovies;
