import React from 'react';

import {Heading, HStack, Image, Stack, Text, VStack} from "@chakra-ui/react";

import Section from "@/components/utilities/Section";
import ContactLink from "@/components/Home/Header/ContactLink";
import Location from "@/components/utilities/Location";

import contactLinks from "@/data/contactLinks";
import profileHeader from "@/data/profileHeader";

const Header = () => {
    return (
        <Section
            id={'about'}
        >
            <Stack
                spacing={{
                    base: 4,
                    md: 150
                }}
                direction={{
                    base: 'column-reverse',
                    md: 'row'
                }}
                w={'100%'}
                justifyContent={'space-between'}
                alignItems={{
                    base: 'flex-start',
                    md: 'center'
                }}
            >
                <VStack
                    alignItems={'flex-start'}
                >
                    <Heading
                        bgGradient={'linear(to-r, #ac8037, #d2b267)'}
                        backgroundClip={'text'}
                        color={'transparent'}
                        w={'fit-content'}
                    >
                        {profileHeader.name}
                    </Heading>
                    <Text>
                        {profileHeader.subtitle}
                    </Text>
                    <HStack>
                        {
                            contactLinks.map((contactLink, index) => (
                                <ContactLink
                                    key={index}
                                    contactLink={contactLink}
                                />
                            ))
                        }
                    </HStack>
                </VStack>
                <Image
                    src={'/headshot.jpeg'}
                    alt={'Jason Hedman'}
                    boxSize={{
                        base: '50%',
                        md: 200
                    }}
                    rounded={'md'}
                />
            </Stack>
        </Section>
    );
};

export default Header;