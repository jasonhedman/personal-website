import {TagProjects} from "@/types/TagProjects";
import projects from "@/data/projects";

export enum Skills {
    FullStackWebDev = "Full Stack Web Dev",
    MobileDev = "Mobile Dev",
    SmartContractDev = "Smart Contract Dev",
    Blockchain = "Blockchain",
    ProductManagement = "Product Management",
    UIUX = "UI/UX",
    GraphicDesign = "Graphic Design",
    FinancialEngineering = "Financial Engineering",
    Calculus = "Calculus",
    Statistics = "Statistics",
    AppliedAI = "Applied AI",
    Azure = "Azure",
    GoogleCloud = "Google Cloud",
    DatabaseManagement = "Database Management",
    GameDev = "Game Dev",
    iOSDev = "iOS Dev",
    AndroidDev = "Android Dev",
    dAppDev = "dApp Dev",
}

export const rankedSkills = (): TagProjects[] => Object.entries(projects
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
    .map(([tag, projects]) => ({tag: tag as Skills, projects }))
    .sort((a, b) => b.projects.length - a.projects.length);