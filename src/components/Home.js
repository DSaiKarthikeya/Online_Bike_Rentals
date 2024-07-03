import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home" id="home">
            <center><h1 className="home-title">Harley Davidson</h1></center>
            <div className="home-content container">
                <div className="home-data">
                    <div className="home-box">
                        <h3>Electric Motor</h3>
                        <h2>Revelation</h2>
                    </div>
                    <div className="home-box">
                        <h3>Torque</h3>
                        <h2>86 Ft-Lb</h2>
                    </div>
                    <div className="home-box">
                        <h3>HorsePower</h3>
                        <h2>105 Hp / X78 Kw</h2>
                    </div>
                </div>
                <img src="https://wallpapercave.com/wp/wp3075646.jpg" alt="" className="home-img" />
                <div className="home-btns">
                    <a href="#" className="dealer-btn"><i className="ri-compass-3-line"></i> Find a dealer</a>
                    <a href="#" className="ride-btn"><i className="ri-motorbike-line"></i> Test Ride</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
