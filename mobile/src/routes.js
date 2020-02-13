import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
    },
    {
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);
export default Routes;
