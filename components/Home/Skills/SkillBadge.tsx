import React from 'react';

import {Badge, ListItem, Tooltip, UnorderedList} from "@chakra-ui/react";

import {RankedSkill} from "@/types/RankedSkill";

interface Props {
    rankedSkill: RankedSkill
}

const SkillBadge: React.FC<Props> = ({ rankedSkill }) => {
    return (
        <Tooltip
            label={
                <UnorderedList
                    alignItems={'flex-start'}
                >
                    {
                        rankedSkill.projects.map((project, index) => (
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
                {rankedSkill.skill}
            </Badge>
        </Tooltip>
    );
};

export default SkillBadge;
