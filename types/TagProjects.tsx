import {Skills} from "@/data/skills";
import {Libraries} from "@/data/libraries";
import {Languages} from "@/data/languages";

export interface TagProjects {
    tag: Skills | Libraries | Languages;
    projects: string[];
}