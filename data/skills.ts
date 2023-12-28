import {RankedSkill} from "@/types/RankedSkill";
import projects from "@/data/projects";

export enum Skills {
    FullStackWebDev = "Full Stack Web Dev",
    React = "React",
    Node = "Node",
    NextJS = "NextJS",
    ChakraUI = "Chakra UI",
    TypeScript = "TypeScript",
    JavaScript = "JavaScript",
    HTML = "HTML",
    CSS = "CSS",
    Python = "Python",
    Java = "Java",
    CSharp = "C#",
    CPlusPlus = "C++",
    Move = "Move",
    Solidity = "Solidity",
    SmartContractDev = "Smart Contract Dev",
    Blockchain = "Blockchain",
    ProductManagement = "Product Management",
    UIUX = "UI/UX",
    GraphicDesign = "Graphic Design",
    FinancialEngineering = "Financial Engineering",
    Math = "Math",
    Calculus = "Calculus",
    LinearAlgebra = "Linear Algebra",
    Statistics = "Statistics",
    DataScience = "Data Science",
    AppliedAI = "Applied AI",
    Azure = "Azure",
    Firebase = "Firebase",
    GoogleCloud = "Google Cloud",
    SQL = "SQL",
    DatabaseManagement = "Database Management",
    GoogleMapsAPI = "Google Maps API",
    GooglePlacesAPI = "Google Places API",
    Unity = "Unity",
    GameDev = "Game Dev",
    Photon = "Photon",
    ReactNative = "React Native",
    iOSDev = "iOS Dev",
    AndroidDev = "Android Dev",
    dAppDev = "dApp Dev",
}

export const rankedSkills = (): RankedSkill[] => Object.entries(projects
    .reduce((acc, project) => {
        project.skills.forEach(skill => {
            if(acc[skill]) {
                acc[skill].push(project.name);
            } else {
                acc[skill] = [project.name];
            }
        });
        return acc;
    }, {} as {[key in Skills]: string[]}))
    .map(([skill, projects]) => ({skill: skill as Skills, projects }))
    .sort((a, b) => b.projects.length - a.projects.length);