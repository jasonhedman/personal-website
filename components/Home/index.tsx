import React from 'react';

import {Container} from "@chakra-ui/react";

import Header from "@/components/Home/Header";
import About from "@/components/Home/About";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import Education from "@/components/Home/Education";
import Hackathons from "@/components/Home/Hackathons";

const Home = () => {
    return (
        <Container
            maxW={'6xl'}
            py={{
                base: 4,
                md: 8
            }}
        >
            <Header />
            <About />
            <Projects />
            <Hackathons />
            <Education />
            <Skills />
        </Container>
    );
};

export default Home;
