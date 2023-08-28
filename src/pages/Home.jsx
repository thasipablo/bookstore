import { BookFormComponent, BookListComponent } from '../components';

const Home = () => (
  <div>
    <h1>Welcome to the bookstore</h1>
    <BookListComponent />
    <BookFormComponent />
  </div>
);

export default Home;
