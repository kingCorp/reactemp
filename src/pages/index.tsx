import { Route, Switch } from 'react-router-dom';
import { PrivateRote } from './PrivateRote';
import { PublicRoute } from './PublicRoute';
import { ScrollToTop } from '../components/ScrollToTop';
import { paths } from '../utils/constants';

//pages
import Basic from './basic';


export const Router = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Landing routes */}
        <Route exact path={paths.BASIC} component={Basic} />
      </Switch>
    </>
  );
};
