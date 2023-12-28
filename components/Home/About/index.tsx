import React from 'react';

import {Text} from "@chakra-ui/react";

import Section from "@/components/utilities/Section";
import Subheading from "@/components/utilities/Subheading";

import profileHeader from "@/data/profileHeader";

const About = () => {
    return (
        <Section>
            <Subheading
                text={'About'}
            />
            <Text>
                {profileHeader.about}
            </Text>
        </Section>
    );
};

export default About;
