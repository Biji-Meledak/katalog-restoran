import Home from '../views/pages/home';
import Detail from '../views/pages/description';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
