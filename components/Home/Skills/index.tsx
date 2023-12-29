import React, {useEffect, useState} from 'react';

import {HStack} from "@chakra-ui/react";

import Section from "@/components/utilities/Section";
import Subheading from "@/components/utilities/Subheading";
import SkillBadge from "@/components/Home/Skills/SkillBadge";

import { rankedSkills as getRankedSkills } from "@/data/skills";

import {RankedSkill} from "@/types/RankedSkill";

const Skills = () => {

    const [rankedSkills, setRankedSkills] = useState<RankedSkill[]>([]);

    useEffect(() => {
        setRankedSkills(getRankedSkills())
    }, []);


    return (
        <Section
            id={'skills'}
        >
            <Subheading text={'Skills'} />
            <HStack
                flexWrap={'wrap'}
                spacing={2}
            >
                {
                    rankedSkills.map((rankedSkill, index) => (
                        <SkillBadge
                            key={index}
                            rankedSkill={rankedSkill}
                        />
                    ))
                }
            </HStack>
        </Section>
    );
};

export default Skills;
