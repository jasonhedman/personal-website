import React, {useState} from 'react';

import {Button, VStack} from "@chakra-ui/react";

import Section from "@/components/utilities/Section";
import Subheading from "@/components/utilities/Subheading";
import Hackathon from "@/components/Home/Hackathons/Hackathon";

import hackathons from "@/data/hackathons";

const Hackathons = () => {

    const [showAll, setShowAll] = useState<boolean>(false);

    return (
        <Section>
            <Subheading text={'Hackathon Awards'} />
            <VStack
                spacing={{
                    base: 4,
                    md: 8
                }}
            >
                {
                    hackathons.slice(0, showAll ? hackathons.length : 3).map((hackathon, index) => (
                        <Hackathon
                            key={index}
                            hackathon={hackathon}
                        />
                    ))
                }
                {
                    !showAll && (
                        <Button
                            onClick={() => setShowAll(true)}
                        >
                            Show {hackathons.length - 3} More
                        </Button>
                    )
                }
            </VStack>
        </Section>
    );
};

export default Hackathons;
