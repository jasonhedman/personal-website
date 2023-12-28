import {Skills} from "@/data/skills";

import {CarouselImage} from "@/types/CarouselImage";

export interface ProjectPreview {
    name: string;
    description: string;
    image: string;
    skills: Skills[];
}

export interface Project extends ProjectPreview {
    extendedDescription: string;
    githubUrl: string;
    demoUrl: string;
    images: CarouselImage[];
}