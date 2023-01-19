import { GraphQLClient, gql } from 'graphql-request';

const fetchPopularMovies = async (isDynamic?: boolean) => {
  const GET_QUERY = gql`
    query MyQuery($api_key: String) {
      getPopular(api_key: $api_key) {
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
        dates {
          maximum
          minimum
        }
      }
    }
  `;

  const client = new GraphQLClient(
    'https://gbadolite.stepzen.net/api/hardy-stoat/__graphql',
    {
      method: 'GET',
      jsonSerializer: {
        parse: JSON.parse,
        stringify: JSON.stringify,
      },
      cache: isDynamic ? 'no-cache' : 'default',
      headers: {
        'Content-Type': 'application/json',
        authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`,
      },
    }
  );

  const variables = {
    api_key: process.env.MOVIE_DB_API_KEY,
  };

  const popularMovies = await client.request(GET_QUERY, variables);

  return popularMovies;
};

export default fetchPopularMovies;
