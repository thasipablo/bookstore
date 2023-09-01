import { BookFormComponent, BookListComponent } from '../components';

const Home = () => (
  <div className="container">
    <BookListComponent />
    <BookFormComponent />
  </div>
);

export default Home;
