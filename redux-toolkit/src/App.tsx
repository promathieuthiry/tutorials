import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ListTasks from "./components/Tasks/ListTasks";

function App() {
  return (
    <div className="content">
      <Header />
      <ListTasks />
      <div className="separator" />
      <Footer />
    </div>
  );
}

export default App;
