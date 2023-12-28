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
        >
            {text}
        </Heading>
    );
};

export default Subheading;
