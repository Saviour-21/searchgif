import './App.css';
import Tabs from './component/Tabs';
import Gifs from './component/gifs';
import Stickers from './component/Stickers';
import SearchComponent from './component/search';

function App() {
  const data = [{
    name: "Gifs",
    component: <Gifs />
  }, {
    name: "Stickers",
    component: <Stickers />
  },{
    name: "Search",
    component: <SearchComponent />
  }]

  return (
    <div className="App">
      <Tabs tabData ={data} useHorizontalLayout/>
    </div>
  );
}

export default App;
