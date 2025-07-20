import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age={30} bio="Loves React and hiking." />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;