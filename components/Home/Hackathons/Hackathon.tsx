import React from 'react';

import {Heading, Stack, Text, VStack} from "@chakra-ui/react";

import Location from "@/components/utilities/Location";

import {Hackathon as HackathonType} from "@/types/Hackathon";

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
            <Stack
                w={'100%'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
                direction={{
                    base: 'column',
                    md: 'row'
                }}
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
                    opacity={0.8}
                >
                    {hackathon.date}
                </Text>
            </Stack>
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
                    opacity={0.7}
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
                    opacity={0.7}
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
