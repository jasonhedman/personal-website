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

import {Project} from "@/types/Project";
import Carousel from "@/components/utilities/Carousel";

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
                        <Heading
                            fontSize={'3xl'}
                        >
                            {selectedProject.name}
                        </Heading>
                        <Text
                            fontSize={'sm'}
                            color={'blackAlpha.600'}
                        >
                            {selectedProject.startDate}-{selectedProject.endDate}
                        </Text>
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
                            Technologies and Skills
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
