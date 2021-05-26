import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Service from './Service';

const Home = () => {
    return (
        <main>
             <section className="headerSection">
                 <Navbar></Navbar>
                 <Header></Header>               
             </section>
             <Service></Service>
             <Footer></Footer>
        </main>
    );
};

export default Home;