import { useRouter } from 'next/router';
import React from 'react';

const SearchedUsers = () => {
  const router = useRouter();

  // Retrieve the search results query parameter and parse it
  const searchResultsQueryParam = router.query.searchResults;
  const searchResults = searchResultsQueryParam
    ? JSON.parse(decodeURIComponent(searchResultsQueryParam))
    : [];

  return (
    <div>
      <h1>Searched Users</h1>
      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))
        ) : (
          <li>No search results found.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchedUsers;
