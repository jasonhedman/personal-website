import React, {useEffect, useState} from 'react';

import Section from "@/components/utilities/Section";
import Subheading from "@/components/utilities/Subheading";

import { rankedSkills as getRankedSkills } from "@/data/skills";
import { rankedLibraries as getRankedLibraries } from "@/data/libraries";
import { rankedLanguages as getRankedLanguages } from "@/data/languages";


import {TagProjects} from "@/types/TagProjects";
import Toolset from "@/components/Home/Toolkit/Toolset";

const Toolkit = () => {

    const [rankedSkills, setRankedSkills] = useState<TagProjects[]>([]);
    const [rankedLanguages, setRankedLanguages] = useState<TagProjects[]>([]);
    const [rankedLibraries, setRankedLibraries] = useState<TagProjects[]>([]);

    useEffect(() => {
        setRankedSkills(getRankedSkills())
        setRankedLanguages(getRankedLanguages());
        setRankedLibraries(getRankedLibraries());
    }, []);


    return (
        <Section
            id={'toolkit'}
        >
            <Subheading text={'Toolkit'} />
            <Toolset
                heading={"Skills"}
                tags={rankedSkills}
            />
            <Toolset
                heading={"Languages"}
                tags={rankedLanguages}
            />
            <Toolset
                heading={"Libraries"}
                tags={rankedLibraries}
            />
        </Section>
    );
};

export default Toolkit;
