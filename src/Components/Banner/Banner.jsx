import React from 'react';
import bannerImg from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className="hero bg-[rgba(255,255,255,0.05)] rounded-3xl py-20 mb-12">
            <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-md rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-6xl font-bold mb-12">Books to freshen up <br/> your bookshelf</h1>
                    <button className=" py-4 px-7 bg-[#23BE0A] rounded-[8px] font-bold text-xl">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;