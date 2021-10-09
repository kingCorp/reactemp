import { connectRouter } from 'connected-react-router';

export const createRootReducer = (history: any) => ({
  router: connectRouter(history)
});
