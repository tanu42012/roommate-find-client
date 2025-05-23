import React, { use, useState } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Additional1 from '../Components/Additional1';
import Additional2 from '../Components/Additional2';
import Lottie from "lottie-react";
import Ai from "../assets/Ai..json"
import ToolTip from '../Components/ToolTip';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';


const style = {
    width: "600px"
}

const HomeLayout = () => {

    const { loading } = use(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div >

            <div>

                <header>
                    <Header></Header>
                    <Navbar> <section>

                        <Hero></Hero>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <Lottie style={style} animationData={Ai}></Lottie>
                            <Lottie style={style} animationData={Ai}></Lottie>
                        </div>
                        <div>
                            <ToolTip></ToolTip>
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

                    </Navbar>



                </header>



            </div>
        </div>
    );
};

export default HomeLayout;