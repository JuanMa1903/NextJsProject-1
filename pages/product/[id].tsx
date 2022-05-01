import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/Avo");
  const { data: productList }: TAPIAvoResponse = await response.json();

  const paths = productList.map(({ id }) => ({
    params: {
      id
    }
  }))

  return{
    paths,
    // incremental static generetion
    // 404 for everythings else.
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => { 
  const id = params?.id as string
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${params.id}`)
  const product: TProduct = await response.json()
return{
  props:{
    product,
    }
  }
}

const ProductPage = ( {product} : {product: TProduct}) => {

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
