import React from 'react';
import {Heading} from "@chakra-ui/react";

interface Props {
    text: string;
}

const Subheading: React.FC<Props> = ({ text }) => {
    return (
        <Heading
            as={'h2'}
            fontSize={{
                base: '2xl',
                md: '3xl'
            }}
            // linear gradient from #ac8037 to #e2c273 left to right
            bgGradient={'linear(to-r, #ac8037, #d2b267)'}
            backgroundClip={'text'}
            color={'transparent'}
            w={'fit-content'}
        >
            {text}
        </Heading>
    );
};

export default Subheading;
