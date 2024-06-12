import React from 'react'
import Container from '../Component/Container'

const Home = () => {
    return (
        <Container>
            <div
                className=' w-full h-[80vh] bg-green-300 flex items-center justify-between px-20'
            >
                <div>
                    <h1
                        className=' text-8xl uppercase font-sans flex flex-col font-semibold'
                    >
                        bhavesh
                        <span
                            className=' ml-36'
                        >
                            zalke
                        </span>
                    </h1>
                </div>
                <div>
                    <img
                        src="src\assets\computer.webp"
                        alt="computer img"
                        className=' w-[90%]'
                    />
                </div>
            </div>
        </Container>
    )
}

export default Home
