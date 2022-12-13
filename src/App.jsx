import Searchresult from "./Components/Searchresult"
import Lastline from "./Components/Lastline"
import LastLinePara from "./Components/LastLinePara"
function App() {

  return (
    <div>
      <Searchresult myTitle="How to Use Props in React" para="15-Nov-2021 — We use props in React to pass data from one component to another (from a parent component to a child component(s)). Props is just a shorter ...
" link="http/react" />
      <Searchresult myTitle="Understand all about Props in React js" para="23-Nov-2022 — In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, ..." link="http/www.com" />
      <Searchresult myTitle="React js" para="Props stand for They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML ...
" link="www.com.java" />
      <Searchresult myTitle="ReactJS props" para="02-Aug-2022 — props is an object and it contains all of the props passed to the child component. The props name of the child component are keys of this object ...
"link="www.com.reactjs" />
      <Searchresult myTitle="Full React" para="Hey gang, in this React tutorial we'll learn about props - which is a way to pass data from parent components into child" link="www.Youtube.com" />
      <Lastline />
      <LastLinePara />
    </div>
  )
}

export default App
