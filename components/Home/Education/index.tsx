import React from 'react';

import {VStack} from "@chakra-ui/react";

import Section from "@/components/utilities/Section";
import Subheading from "@/components/utilities/Subheading";
import EducationItem from "@/components/Home/Education/EducationItem";

import educations from "@/data/educations";

const Education = () => {
    return (
        <Section>
            <Subheading
                text={'Education'}
            />
            <VStack
                w={'100%'}
                alignItems={'flex-start'}
            >
                {
                    educations.map((education, index) => (
                        <EducationItem
                            key={index}
                            education={education}
                        />
                    ))
                }
            </VStack>
        </Section>
    );
};

export default Education;
