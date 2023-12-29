import React from 'react';

import {Container} from "@chakra-ui/react";

import Header from "@/components/Home/Header";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import Education from "@/components/Home/Education";
import Hackathons from "@/components/Home/Hackathons";

import {NAVBAR_HEIGHT} from "@/components/Navbar";

const Home = () => {
    return (
        <Container
            maxW={'6xl'}
            py={{
                base: `${NAVBAR_HEIGHT + 8}px`,
                md: `${NAVBAR_HEIGHT + 16}px`
            }}
        >
            <Header />
            <Education />
            <Projects />
            <Hackathons />
            <Skills />
        </Container>
    );
};

export default Home;
