import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram } from '@styled-icons/boxicons-logos'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <>
        <div className="home">
          <div className="slider-wrapper">
            <div className="slider">
              <img src="/uploads/slider-1.jpg" alt='images' />
              <img src="/uploads/slider-2.jpg" alt='images' />
              <img src="/uploads/slider-3.jpg" alt='images' />
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
