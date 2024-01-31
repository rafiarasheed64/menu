import React from 'react'

const Menu = ({item}) => {
    return (
        <div className='item-div'>
        {item.map((ele)=>{
        const {id, img, desc, price, title} = ele
            return(
                <div key={id} className='item'>
                    <div className='img'>
                    <img style={{height: '100%', width: '100%'}}  src={img} alt="" />
                    </div>
                    <div className='content-div'>
                <h1>{title}</h1>
                <span>{price}$</span>
                <p>{desc}</p> 
                    </div>
                </div>
                )
        })}
    </div>
  )
}

export default Menu