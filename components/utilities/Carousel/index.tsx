import React, { useState } from 'react';

import {Box, BoxProps, Flex, HStack, Image, ResponsiveValue, Text, VStack} from "@chakra-ui/react";

import {CarouselImage} from "@/types/CarouselImage";

interface Props extends BoxProps {
    images: CarouselImage[];
    imageHeight: string | number | ResponsiveValue<string | number>;
}

const Carousel: React.FC<Props> = ({ images, imageHeight, ...props }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Flex
            flex={1}
            direction={'column'}
            alignItems={'center'}
            {...props}
        >
            <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].caption}
                h={imageHeight}
                maxW={'100%'}
                objectFit={'contain'}
                rounded={'md'}
                transition={'all 0.2s ease-in-out'}
            />
            <VStack
                flexShrink={0}
            >
                <Text
                    color={'black'}
                >
                    {images[selectedIndex].caption}
                </Text>
                <HStack>
                    {
                        images.length > 1 && images.map((image, index) => (
                            <Box
                                key={index}
                                w={2}
                                h={2}
                                rounded={'full'}
                                bg={index === selectedIndex ? 'black' : 'blackAlpha.400'}
                                cursor={'pointer'}
                                onClick={() => setSelectedIndex(index)}
                                _hover={{
                                    bg: 'black'
                                }}
                                transition={'all 0.2s ease-in-out'}
                            />
                        ))
                    }
                </HStack>
            </VStack>
        </Flex>
    );
};

export default Carousel;
