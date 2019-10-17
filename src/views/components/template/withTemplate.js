import React from 'react';
import Template from './Template';

const withTemplate = WrappedComponent => {
  const Component = props => (
    <Template>
      <WrappedComponent {...props} />
    </Template>
  );
  return Component;
};
export default withTemplate;
