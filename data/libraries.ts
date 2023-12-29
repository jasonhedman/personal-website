import projects from "@/data/projects";

import {TagProjects} from "@/types/TagProjects";

export enum Libraries {
    React = "React",
    ReactNative = "React Native",
    Expo = "Expo",
    NextJS = "NextJS",
    Firebase = "Firebase",
    GoogleCloudFunctions = "Google Cloud Functions",
    AzureCosmos = "Azure Cosmos DB",
    AzureAiSearch = "Azure AI Search",
    AzureDocumentIntelligence = "Azure Document Intelligence",
    AzureActiveDirectory = "Azure Active Directory",
    AzureStaticWebApps = "Azure Static Web Apps",
    GPT = "GPT",
    VercelAiSdk = "Vercel AI SDK",
    ChakraUI = "Chakra UI",
    MaterialUI = "Material UI",
    Langchain = "Langchain",
    Unity = "Unity",
    PhotonFusion = "Photon Fusion",
    PhotonPun2 = "Photon PUN 2",
    AptosMove = "Aptos Move",
    VercelPostgreSQL = "Vercel PostgreSQL",
    WebGL = "WebGL",
    Thirdweb = "Thirdweb",
    CoinbaseWallet = "Coinbase Wallet",
    Polygon = "Polygon",
    Ethereum = "Ethereum",
    GoogleMapsAPI = "Google Maps API",
    GooglePlacesAPI = "Google Places API"
}

export const rankedLibraries = (): TagProjects[] => Object.entries(projects
    .reduce((acc, project) => {
        project.libraries.forEach(skill => {
            if(acc[skill]) {
                acc[skill].push(project.name);
            } else {
                acc[skill] = [project.name];
            }
        });
        return acc;
    }, {} as {[key in Libraries]: string[]}))
    .map(([tag, projects]) => ({tag: tag as Libraries, projects }))
    .sort((a, b) => b.projects.length - a.projects.length);