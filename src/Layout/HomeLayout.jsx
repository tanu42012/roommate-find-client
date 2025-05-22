import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Additional1 from '../Components/Additional1';
import Additional2 from '../Components/Additional2';
import Lottie from "lottie-react";
import Ai from "../assets/Ai..json"
const style={
    width:"600px"
}

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>

            <section>

                <Hero></Hero>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                <Lottie style={style} animationData={Ai}></Lottie>
                <Lottie style={style} animationData={Ai}></Lottie>
                </div>
               
            </section>
            <main>
                <Outlet></Outlet>
            </main>
            <section>
            <Additional1></Additional1>
            <Additional2></Additional2>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default HomeLayout;