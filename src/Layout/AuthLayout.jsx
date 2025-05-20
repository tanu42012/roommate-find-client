import React from 'react';

const AuthLayout = () => {
    return (
        <div>
             <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default AuthLayout;