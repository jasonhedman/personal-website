import {Skills} from "@/data/skills";

import {Project} from "@/types/Project";

const projects: Project[] = [
    {
        name: 'ChatEDU',
        description: 'Virtual tutor that transforms traditional study materials into interactive learning sessions',
        extendedDescription: 'ChatEDU is a virtual tutor that transforms traditional study materials into interactive learning sessions. It uses AI to analyze the content of a textbook and generate questions and answers for each section. Students can then use the ChatEDU app to chat with the virtual tutor and learn the material in a fun and engaging way. ChatEDU is built with React, Chakra UI, Next.js, Node.js, TypeScript, and Azure Cognitive Services.',
        skills: [Skills.AppliedAI, Skills.Azure, Skills.FullStackWebDev, Skills.React, Skills.ChakraUI, Skills.DatabaseManagement, Skills.SQL, Skills.NextJS, Skills.Node, Skills.TypeScript, Skills.UIUX],
        image: 'https://www.chatedu.tech/logo.png',
        githubUrl: '',
        demoUrl: '',
        images: [
            {
                src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/691/588/datas/original.png',
                caption: 'Explore Page'
            },
            {
                src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/691/588/datas/original.png',
                caption: 'Explore Page'
            }
        ]
    },
    {
        name: 'BRAWL3R',
        description: 'Online multiplayer fighter game with interoperable in-game NFTs',
        skills: [Skills.Unity, Skills.SmartContractDev, Skills.Move, Skills.GameDev, Skills.Photon, Skills.CSharp, Skills.Blockchain, Skills.GraphicDesign, Skills.UIUX],
        image: 'https://www.brawl3r.com/favicon.png',
        extendedDescription: 'BRAWL3R is an online multiplayer fighter game with interoperable in-game NFTs. Players can battle each other in real-time and earn NFTs that can be used in other games. BRAWL3R is built with Unity, C#, Photon, and Move.',
        githubUrl: '',
        demoUrl: '',
        images: []
    },
    {
        name: 'Satay Finance',
        description: 'Composable yield strategies and auto-compounding vaults on Aptos',
        skills: [Skills.FinancialEngineering, Skills.SmartContractDev, Skills.Move],
        image: 'https://www.satay.finance/logo.png',
        extendedDescription: 'Satay Finance is a composable yield strategies and auto-compounding vaults on Aptos. It is built with Solidity, Rust, and Move.',
        githubUrl: '',
        demoUrl: '',
        images: []
    },
    {
        name: 'Decentralese',
        description: 'Zero-collateral NFT renting and leasing on Polygon using ERC-4907',
        skills: [Skills.SmartContractDev, Skills.Solidity],
        image: 'https://www.decentra.lease/favicon.ico',
        extendedDescription: 'Decentralese is a zero-collateral NFT renting and leasing platform on Polygon using ERC-4907. It is built with Solidity, Rust, and Move.',
        githubUrl: '',
        demoUrl: '',
        images: []
    },
    {
        name: 'Smarter Barter',
        description: 'Financial literacy program for underprivileged youth in New York City.',
        skills: [Skills.ReactNative, Skills.Firebase, Skills.GoogleCloud, Skills.ProductManagement],
        image: 'https://creditdo-admin.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75',
        extendedDescription: 'Smarter Barter is a financial literacy program for underprivileged youth in New York City. It is built with React Native, Firebase, and Google Cloud.',
        githubUrl: '',
        demoUrl: '',
        images: []
    },
    {
        name: 'Real Vision Bot Portfolio',
        description: 'Collective investment DAO for Real Vision Pro Crypto NFT holders.',
        skills: [Skills.SmartContractDev, Skills.FullStackWebDev],
        image: 'https://yt3.googleusercontent.com/riWTZgtzm4m3UOTG8MMnTal7i7EfV1rWEhzS5Y1m_3ineiBKylbhoYjAacT2ZWP7skSAqpmC=s900-c-k-c0x00ffffff-no-rj',
        extendedDescription: 'Real Vision Bot Portfolio is a collective investment DAO for Real Vision Pro Crypto NFT holders. It is built with Solidity, Rust, and React.',
        githubUrl: '',
        demoUrl: '',
        images: []
    },
    {
        name: 'Moneyline',
        description: 'Decentralized betting market where users can trade sports teams like stocks.',
        skills: [Skills.SmartContractDev, Skills.Solidity],
        image: 'https://media.licdn.com/dms/image/C4E0BAQH6uAdSN9C0EA/company-logo_100_100/0/1630633790771?e=1711584000&v=beta&t=sZUkrVC8T8irHEDAOBQsrDqjTkgGauLATqzYiRGpOBc',
        extendedDescription: 'Moneyline is a decentralized betting market where users can trade sports teams like stocks. It is built with Solidity, Rust, and React.',
        githubUrl: '',
        demoUrl: '',
        images: []
    },
    {
        name: 'PikApp',
        description: 'Map-based app for finding and coordinating pickup sporting events.',
        skills: [Skills.ReactNative, Skills.GoogleMapsAPI],
        image: 'https://media.licdn.com/dms/image/C4E0BAQG4SYS8gVthhA/company-logo_100_100/0/1630623221285?e=1711584000&v=beta&t=Xcc3Ox-CChPTEh1Nsudd5Q0_nXQQA593wcPIS4RKaV4',
        extendedDescription: 'PikApp is a map-based app for finding and coordinating pickup sporting events. It is built with React Native and Google Maps API.',
        githubUrl: '',
        demoUrl: '',
        images: []
    },
    {
        name: 'Aptostream',
        description: 'Programmable continuous payment protocol on Aptos.',
        skills: [Skills.FinancialEngineering, Skills.dAppDev],
        image: 'https://aptostream.com/logo.png',
        extendedDescription: 'Aptostream is a programmable continuous payment protocol on Aptos. It is built with Solidity, Rust, and React.',
        githubUrl: '',
        demoUrl: '',
        images: []
    },
]

export default projects;