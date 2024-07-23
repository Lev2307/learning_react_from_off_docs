import Button from './Button';
import List from './List'
import Avatar from './Avatar';
import RecipeList from './Recipe';
import Gallery from './Gallery';
import Score from './Score';
import ListOfCounters from './ListOfCounters';
import ShoppingCart from './ShoppingCart';
import Picture from './Picture';
import ChatRoom from './ChatRoom';

function App() {
  let flag = true;
  const fruitItems = [
    {name: 'pineapple', isFruit: false, id: 1},
    {name: 'strawberry', isFruit: false, id: 2},
    {name: 'plum', isFruit: true, id: 3},
  ]
  
  const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];
  
  const chemists = people.filter(person => person.profession === 'chemist');
  
  const chemists_list_items = chemists.map(
    chemist => 
    <li key={chemist.id}>
      {chemist.name}
    </li>
  )
  return (
    <div className="App">
      {flag ?(
        <Button name="flag is true" />
      ) : (
        <Button name="flag is false" />
      )}
      <List list={fruitItems}/>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={200}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <ul>{chemists_list_items}</ul>
      {/* <RecipeList /> */}
      {/* <Gallery /> */}
      {/* <Score /> */}
      {/* <ListOfCounters /> */}
      {/* <ShoppingCart /> */}
      {/* <Picture /> */}
      <ChatRoom />
    </div>
  );
}

export default App;
