import './App.css'
import Header from "./Basic/Header/Header.jsx";
import Section from './Basic/Section/Section.jsx';
import Aside from './Basic/Aside/Aside.jsx';
import Footer from './Basic/Footer/Footer.jsx';


function App() {

  return (
    <>
      <Header />
      <div className='flex items-center m-6 p-30'>
        <Aside />
        <Section />
      </div>
      <Footer />
    </>
  )
}

export default App
