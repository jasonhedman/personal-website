import React from 'react';

import {VStack} from "@chakra-ui/react";

import Section from "@/components/utilities/Section";
import Subheading from "@/components/utilities/Subheading";
import Hackathon from "@/components/Home/Hackathons/Hackathon";

import hackathons from "@/data/hackathons";

const Hackathons = () => {
    return (
        <Section>
            <Subheading text={'Hackathons'} />
            <VStack
                spacing={{
                    base: 4,
                    md: 8
                }}
            >
                {
                    hackathons.map((hackathon, index) => (
                        <Hackathon
                            key={index}
                            hackathon={hackathon}
                        />
                    ))
                }
            </VStack>
        </Section>
    );
};

export default Hackathons;
