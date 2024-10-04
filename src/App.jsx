import './App.css'
import Btn from './components/button/btn'
import Card from './components/card/Card'
import Text from './components/h1/Text'


function App() {
  

  return (
    <div>
      <div className='text'>
      <Text
       h1 = {"hello"}
       color = "black"
       fs = "15px"
       ta = "center"
       />
      
       </div>

       <div className = 'card1'>

        <Card 
        model = {"iphone 16"}
        desc = {"very good phone"}
        price = {"1000$"}
        left = {"30"}
        bg = "aliceblue"  
        />
</div>

       <Btn
       width="200px" 
       />
       

    </div>
  )
}

export default App
