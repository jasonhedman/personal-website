import React from 'react';

import Link from "next/link";

import {
    Badge,
    Button, Divider,
    Heading, HStack, Image,
    Modal,
    ModalBody, ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text, VStack
} from "@chakra-ui/react";

import Carousel from "@/components/utilities/Carousel";

import {Project} from "@/types/Project";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    selectedProject: Project
}

const ProjectModal: React.FC<Props> = ({ isOpen, onClose, selectedProject }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={'xl'}
            autoFocus={false}
            scrollBehavior={'inside'}
            isCentered={true}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <HStack
                        spacing={4}
                    >
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            boxSize={8}
                            rounded={'md'}
                        />
                        <VStack
                            alignItems={'flex-start'}
                            spacing={0}
                        >
                            <Heading
                                fontSize={{
                                    base: '2xl',
                                    md: '3xl'
                                }}
                            >
                                {selectedProject.name}
                            </Heading>
                            <Text
                                fontSize={'sm'}
                                opacity={0.7}
                            >
                                {selectedProject.startDate}-{selectedProject.endDate}
                            </Text>
                        </VStack>
                    </HStack>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack
                        alignItems={'flex-start'}
                        spacing={4}
                    >
                        {
                            selectedProject.images.length > 0 && (
                                <Carousel
                                    imageHeight={300}
                                    w={'100%'}
                                    images={selectedProject.images}
                                />
                            )
                        }
                        <Text>
                            {selectedProject.extendedDescription}
                        </Text>
                        <Divider />
                        <Text
                            fontWeight={'semibold'}
                        >
                            Programming Languages
                        </Text>
                        <HStack
                            flexWrap={'wrap'}
                        >
                            {
                                selectedProject.languages.map((skill, index) => (
                                    <Badge
                                        key={index}
                                    >
                                        {skill}
                                    </Badge>
                                ))
                            }
                        </HStack>
                        <Text
                            fontWeight={'semibold'}
                        >
                            Libraries and Frameworks
                        </Text>
                        <HStack
                            flexWrap={'wrap'}
                        >
                            {
                                selectedProject.libraries.map((skill, index) => (
                                    <Badge
                                        key={index}
                                    >
                                        {skill}
                                    </Badge>
                                ))
                            }
                        </HStack>
                        <Text
                            fontWeight={'semibold'}
                        >
                            Skills
                        </Text>
                        <HStack
                            flexWrap={'wrap'}
                        >
                            {
                                selectedProject.skills.map((skill, index) => (
                                    <Badge
                                        key={index}
                                    >
                                        {skill}
                                    </Badge>
                                ))
                            }
                        </HStack>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    {
                        selectedProject.githubUrl && (
                            <Link
                                href={selectedProject.githubUrl}
                                target={'_blank'}
                            >
                                <Button
                                    variant={'outline'}
                                >
                                    Source Code
                                </Button>
                            </Link>
                        )
                    }
                    {
                        selectedProject.demoUrl && (
                            <Link
                                href={selectedProject.demoUrl}
                                target={'_blank'}
                            >
                                <Button
                                    colorScheme={'blue'}
                                    ml={2}
                                >
                                    Live Demo
                                </Button>
                            </Link>
                        )
                    }
                </ModalFooter>
            </ModalContent>
        </Modal>

    );
};

export default ProjectModal;
