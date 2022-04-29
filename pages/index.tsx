import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from "isomorphic-unfetch";

export const getServerSideProps = async () => { 
    const response = await fetch('/api/Avo')
    const {data: ProductList}: TAPIAvoResponse = await response.json()
      }
  return{
    props:{
      ProductList,
    }
  }
 }

const HomePage = ( { ProductList: TProduct[]}) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={ProductList} />
    </Layout>
  )
}

export default HomePage