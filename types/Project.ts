import {Skills} from "@/data/skills";

import {CarouselImage} from "@/types/CarouselImage";
import {Languages} from "@/data/languages";
import {Libraries} from "@/data/libraries";

export interface ProjectPreview {
    name: string;
    description: string;
    image: string;
    showcase: (Skills | Languages | Libraries)[];
    startDate: string;
    endDate: string;
}

export interface Project extends ProjectPreview {
    extendedDescription: string;
    githubUrl?: string;
    demoUrl?: string;
    images: CarouselImage[];
    skills: Skills[],
    languages: Languages[],
    libraries: Libraries[]
}