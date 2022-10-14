import FirstScreen from './Pages/FirstScreen';
import SecondScreen from './Pages/SecondScreen';
import ThirdScreen from './Pages/ThirdScreen';

const routes = [
  {
    name: 'direction',
    component: FirstScreen,
  },
  {name: 'position', component: SecondScreen},
  {
    name: 'justifyContent',
    component: ThirdScreen,
  },
];

export default routes;
