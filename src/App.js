import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/Navigation/Navigation"
import Home from "./routes/Home/Home";
import Shop from './routes/Shop/Shop';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
