import React from 'react';

import {Education} from "@/types/Education";
import ExperienceHeading from "@/components/utilities/ExperienceHeading";
import {Text, VStack} from "@chakra-ui/react";

interface Props {
    education: Education
}

const EducationItem: React.FC<Props> = ({ education }) => {
    return (
        <VStack
            w={'100%'}
            alignItems={'flex-start'}
        >
            <ExperienceHeading
                headingText={education.school}
                startYear={education.startYear}
                endYear={education.endYear}
            />
            <Text
                fontWeight={'semibold'}
                color={'blackAlpha.700'}
            >
                {education.degree}
            </Text>
            <Text
                fontSize={{
                    base: 'xs',
                    md: 'sm'
                }}
                color={'blackAlpha.700'}
            >
                {education.description}
            </Text>
        </VStack>
    );
};

export default EducationItem;
