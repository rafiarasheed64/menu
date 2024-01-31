import React from 'react'

const Category = ({categories, filterItem}) => {
  return (
    <div className='btn-div'>
        {categories.map((ele,idx)=>{

            console.log(ele);

            return(
                <button key={idx} onClick={()=> filterItem(ele)}>{ele}</button>  
                )
            })}
        {/* {item.map (ele=>{
            const {id,title, img, price, desc} = ele
            return(
                <div>
                    <div key={id}>

                    <img src={img} alt="kdhu"/>
                    <h3>{title}heuoai</h3>
                    <p>{desc}</p>
                    <p>{price}</p>


                    </div>

                </div>
            )
        })} */}


    </div>
  )
}

export default Category