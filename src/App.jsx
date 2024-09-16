import './App.css'
import Heading from './components/Heading';
import Paragraf from './components/Paragraf';
import Link from './components/Link'




function App() {
  const name = 'Vasya'
  const isAdult = true;
  return (
    <>
      <h1 className ="heading">
        {isAdult?'Hello!' : 'Привіт!'}, {name}!
        </h1>
      <Heading titleContent = "something text" userName = {name}/>
    <Paragraf content = " content for paragraf" />
    <Heading titleContent = "123" />
    <Paragraf content ="text lorem"/>
    <Link href="https://rozetka.com.ua/ua/" content="rozetka"/> 
    </>
  );
}

export default App
