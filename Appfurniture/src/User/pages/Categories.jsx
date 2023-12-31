import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CategoryCard from '../components/CategoryCard'
import {AppRoute} from '../../App'


export default function Categories() {

  const [Category, setCategory] = useState([])

  useEffect(() => {
    axios.get(`${AppRoute}api/get-all-Categories`)
      .then((res) => setCategory(res.data.Categories))
      .catch((error) => { console.log(error.message) })
  }, [])

  return (
    <>

      <h1>Category page</h1>
      <div className="container">
        <div className="row">

          {
            Category.map((value, index) =>
              <CategoryCard key={index} CategoryImage={value.CategoryImage} CategoryName={value.CategoryName} />
            )
          }
        </div>

      </div>




    </>
  )
}
