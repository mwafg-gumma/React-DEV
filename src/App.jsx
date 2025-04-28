

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import FrontList from './components/FrontList';
import HomePage from './components/Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import ViewAll from './components/ViewAll';
import FullStack from './components/Pages/FullStack';
import BackList from './components/BackList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* Default Route */}
      <Route index element={<HomePage />} />

      {/* Other Routes */}
      <Route path="Front" element={<HomePage />} />
      <Route path="Full" element={<FullStack />} />
      <Route path="Back" element={<BackList />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;