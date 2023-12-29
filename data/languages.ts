import projects from "@/data/projects";

import {TagProjects} from "@/types/TagProjects";

export enum Languages {
    TypeScript = "TypeScript",
    JavaScript = "JavaScript",
    Move = "Move",
    Solidity = "Solidity",
    SQL = "SQL",
    CSharp = "C#",
    Python = "Python",
}

export const rankedLanguages = (): TagProjects[] => Object.entries(projects
    .reduce((acc, project) => {
        project.languages.forEach(skill => {
            if(acc[skill]) {
                acc[skill].push(project.name);
            } else {
                acc[skill] = [project.name];
            }
        });
        return acc;
    }, {} as {[key in Languages]: string[]}))
    .map(([tag, projects]) => ({tag: tag as Languages, projects }))
    .sort((a, b) => b.projects.length - a.projects.length);