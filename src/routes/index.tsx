import React from 'react';

import AuthorizedRoutes from './authorized';

/**
 * Application routes
 * @constructor
 */
export const Routes: React.FC = () => {
  return <AuthorizedRoutes/>;
};