import React, {useEffect, useState} from 'react'
import "./Page1.css"
import Buttons from './Buttons'
import CoffeeCard from '../CoffeeCard/CoffeeCard'

const Page1 = () => {
    const [products, setProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('popularity');


    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json").then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch((error) => console.error('Error fetching data:', error));
    },[]);

    const handleSort = (criteria) => {
        console.log(`Sorting by: ${criteria}`); // Debugging line
        setSortCriteria(criteria);
      };


      const sortedProducts = [...products].sort((a, b) => {
        console.log(`Current sorting criteria: ${sortCriteria}`); // Debugging line

        switch (sortCriteria) {
            case 'priceLowToHigh':
            return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'priceHighToLow':
            return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
          case 'ratingsHighToLow':
            return b.rating - a.rating;
          case 'ratingsLowToHigh':
            return a.rating - b.rating;
          case 'popularity':
            return b.popular - a.popular; // true (1) will come before false (0)
          default:
            return 0;
        }
      });

    
  return (
    <div className='page1'>
        <h1>Coffee Collection</h1>
        <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div className='filter'>
            <Buttons btntext="All Products" onClick={()=> handleSort('popularity')}/>
            <Buttons btntext="Price" onClick={()=> handleSort('priceLowToHigh') }/>
            <Buttons btntext="Ratings" onClick={()=> handleSort('ratingsHighToLow')}/>

        </div>
        <div className="products-section">
            {sortedProducts.map((product)=>(
                <CoffeeCard key={product.id} background={product.image} name={product.name} price={product.price} votes={product.votes} rating={product.rating} />
            ))}
        </div>
    </div>
  )
}

export default Page1