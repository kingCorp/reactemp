import { elementType } from 'prop-types';
import { Redirect, Route } from 'react-router';
import { isMobile } from 'react-device-detect';

import { paths } from 'Utils/constants';
import Auth from 'middleware/storage';

export const PrivateRote = ({ component: Component, ...rest }) => {
  if (isMobile) {
    return <Redirect to={paths.MOBILE_SCREEN} />;
  }

  // if (isAuthorized && !scoutAccess) {
  //     return <Redirect to={paths.SIGN_UP_PAYMENTS} />;
  // }

  return (
    <Route
      render={(props) =>
        Auth.isAuthenticated() ? <Component {...props} /> : <Redirect to={paths.SIGN_IN} />
      }
      {...rest}
    />
  );
};

PrivateRote.propTypes = {
  component: elementType.isRequired
};
