import React  from 'react'
import {Navbar}  from './Navbar.js'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants.js';
import '../styles/home.css';
import img from '../img/banner-image.jpeg';
import Footer from './Footer.js'



const Home = () => {
  return (
    <>
     <Navbar/>
     <section className='header flex '>
         <div className='header-left'>
            <h1>  SLOGAN </h1>
            <p className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro vitae ad culpa ut sed consequatur dolor 
               rerum neque ducimus quae inventore veli
            </p>
         </div>
         <div className='header-right'>
             {/* <Canvas>
                <ambientLight/>
                <OrbitControls enableZoom={false} />
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
                <Environment preset='sunset' />
             </Canvas> */}

             <img src={img} alt=''></img>
         </div>
     </section>
     
     <section className='main-1 '>
     <motion.div
         variants={fadeIn('up',0.3)}
         initial='hidden'
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
         className='flex'
     >
     
        <div className='what'>
        <h1 >Insight</h1>
            <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat enim exercitationem, culpa quos 
            beatae pariatur dolorum, maiores error distinctio reiciendis tenetur sunt quibusdam magnam dolores dolorem 
            laboriosam repellendus deserunt explicabo.</p>
        </div>
        
        <div className='mission'>
        <h1>Mission</h1>
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium corporis totam dolore 
            facere rerum recusandae ducimus, iusto nulla aut nihil tempore, natus inventore vel sunt atque quas ut. 
            Dolores.</p>
        </div>
        </motion.div>
        
     </section>
     <motion.section
        variants={fadeIn('left',0.4)}
         initial='hidden'
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
      className='membership'>
     <h1>Membership Plan</h1>
          <p className='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sunt, quaerat dignissimos, debitis provident 
          quis necessitatibus expedita eius dolore esse eveniet, minus quos deleniti inventore nihil animi harum 
          recusandae in!</p>
          <button >Join now</button>
     </motion.section>
     <Footer/>
     
     
   </>
  )
}

export default Home