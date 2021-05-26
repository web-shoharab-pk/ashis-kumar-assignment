import React from 'react';
import './Style.css';
import serviceImg from '../images/serviceImg.png'

const Service = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src={serviceImg} className="img-fluid " alt="" />
                </div>
                <div className="col-md-6 p-5">
                    <div className="my-5">
                        <h1 style={{color: '#4619D9', fontWeight: '700'}}>Design and strategy</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores, sint rerum aliquid vel voluptatem obcaecati deleniti iusto harum facilis porro similique labore? Omnis, quis deleniti voluptates tenetur ut vitae!
                        </p>
                    </div>
                    <div className="my-5">
                        <h1 style={{color: '#4619D9', fontWeight: '700'}}>Digital Marketing Channels</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores, sint rerum aliquid vel voluptatem obcaecati deleniti iusto harum facilis porro similique labore? Omnis, quis deleniti voluptates tenetur ut vitae!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;