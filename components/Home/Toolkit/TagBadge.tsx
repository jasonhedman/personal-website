import React from 'react';

import {Badge, ListItem, Tooltip, UnorderedList} from "@chakra-ui/react";

import {TagProjects} from "@/types/TagProjects";

interface Props {
    tag: TagProjects
}

const TagBadge: React.FC<Props> = ({ tag }) => {
    return (
        <Tooltip
            label={
                <UnorderedList
                    alignItems={'flex-start'}
                >
                    {
                        tag.projects.map((project, index) => (
                            <ListItem
                                key={index}
                                color={'white'}
                            >
                                {project}
                            </ListItem>
                        ))
                    }
                </UnorderedList>
            }
        >
            <Badge
                fontSize={16}
                variant={'outline'}
            >
                {tag.tag}
            </Badge>
        </Tooltip>
    );
};

export default TagBadge;
