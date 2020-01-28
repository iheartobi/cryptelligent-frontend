import React from 'react';

const Search = props => {
  return (
    <div>
      <input type="text" placeholder={'Search'} onChange={props.handleChange} />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
