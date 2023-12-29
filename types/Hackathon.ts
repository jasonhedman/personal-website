import {Project} from "@/types/Project";

export interface Hackathon {
    title: string;
    description: string;
    whatIBuilt: string;
    date: string;
    location: string;
    project: Project["name"];
    award: string;
}