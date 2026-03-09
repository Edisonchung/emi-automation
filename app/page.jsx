'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ReachStrip from '@/components/ReachStrip'
import Expertise from '@/components/Expertise'
import WhyEMI from '@/components/WhyEMI'
import Products from '@/components/Products'
import References from '@/components/References'
import Sectors from '@/components/Sectors'
import Brands from '@/components/Brands'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))

    const secs = document.querySelectorAll('section[id]')
    const links = document.querySelectorAll('.nav-link')
    const onScroll = () => {
      let cur = ''
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id })
      links.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--red)' : ''
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <ReachStrip />
      <Expertise />
      <WhyEMI />
      <Products />
      <References />
      <Sectors />
      <Brands />
      <Contact />
      <Footer />
    </>
  )
}
