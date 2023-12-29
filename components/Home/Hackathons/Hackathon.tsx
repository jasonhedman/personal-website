import React from 'react';

import {Hackathon as HackathonType} from "@/types/Hackathon";
import {Heading, HStack, Text, VStack} from "@chakra-ui/react";
import Location from "@/components/utilities/Location";

interface Props {
    hackathon: HackathonType
}

const Hackathon: React.FC<Props> = ({ hackathon }) => {
    return (
        <VStack
            alignItems={'flex-start'}
            w={'100%'}
            spacing={{
                base: 2,
                md: 4
            }}
        >
            <HStack
                w={'100%'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
            >
                <VStack
                    alignItems={'flex-start'}
                >
                    <Heading
                        fontSize={'xl'}
                    >
                        {hackathon.title}  <Text as='span' opacity={0.7} fontSize={'lg'}>{hackathon.award}</Text>
                    </Heading>
                    <Location
                        location={hackathon.location}
                    />
                </VStack>
                <Text
                    color={'blackAlpha.600'}
                >
                    {hackathon.date}
                </Text>
            </HStack>
            <VStack
                spacing={0}
                alignItems={'flex-start'}
            >
                <Text
                    fontSize={{
                        base: 'xs',
                        md: 'sm'
                    }}
                    fontWeight={'semibold'}
                    color={'blackAlpha.600'}
                >
                    Description
                </Text>
                <Text
                    fontSize={{
                        base: 'sm',
                        md: 'md'
                    }}
                >
                    {hackathon.description}
                </Text>
            </VStack>
            <VStack
                spacing={0}
                alignItems={'flex-start'}
            >
                <Text
                    fontSize={{
                        base: 'xs',
                        md: 'sm'
                    }}
                    fontWeight={'semibold'}
                    color={'blackAlpha.600'}
                >
                    What I Built
                </Text>
                <Text
                    fontSize={{
                        base: 'sm',
                        md: 'md'
                    }}
                >
                    {hackathon.whatIBuilt}
                </Text>
            </VStack>
        </VStack>
    );
};

export default Hackathon;
