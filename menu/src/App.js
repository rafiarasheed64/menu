import React, {useState} from 'react'
import Data from './Data'
import Category from './Category'
import Menu from './Menu'
const allCategory = ['all', ...new Set(Data.map((e)=>e.category))]
const App = () => {
  const [item, setItem]= useState(Data)
  const [categories]= useState(allCategory)
  const filterItem = (ele)=>{
    console.log(ele);

    if(ele === 'all'){
      setItem(Data)
      console.log("ssss");
      return;
    }
    const newItem= Data.filter((e)=>e.category === ele)
    setItem(newItem)
  }
  return (
    <div className='main'>
      <h1>OUR MENU</h1>
      <div className='underline'></div>
      <Category filterItem={filterItem} categories={categories}/>
      <Menu item={item}/>
      
    </div>
  )
}

export default App
