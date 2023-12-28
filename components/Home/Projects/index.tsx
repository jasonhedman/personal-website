import React, { useState } from 'react';

import {SimpleGrid, useDisclosure} from "@chakra-ui/react";

import Section from "@/components/utilities/Section";
import Subheading from "@/components/utilities/Subheading";
import ProjectCard from "@/components/Home/Projects/ProjectCard";

import projects from "@/data/projects";

import {Project} from "@/types/Project";
import ProjectModal from "@/components/Home/Projects/ProjectModal";

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState<Project>();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const selectProject = (project: Project) => {
        setSelectedProject(project);
        onOpen();
    }

    const closeProject = () => {
        onClose();
    }

    return (
        <>
            {
                selectedProject && (
                    <ProjectModal
                        isOpen={isOpen}
                        onClose={closeProject}
                        selectedProject={selectedProject}
                    />
                )
            }
            <Section>
                <Subheading
                    text={'Projects'}
                />
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3
                    }}
                    spacing={2}
                >
                    {
                        projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                projectPreview={project}
                                onClick={() => selectProject(project)}
                            />
                        ))
                    }
                </SimpleGrid>
            </Section>
        </>
    );
};

export default Projects;
