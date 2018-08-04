import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="error-page">
      <h1>Page not found...</h1>
    </div>
  );
};

export default {
  component: NotFoundPage
};
