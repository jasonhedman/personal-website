import {Skills} from "@/data/skills";

import {Project} from "@/types/Project";

const projects: Project[] = [
    {
        name: 'ChatEDU',
        description: 'Virtual tutor that transforms traditional study materials into interactive learning sessions',
        extendedDescription: 'ChatEDU is a dynamic virtual tutor that transforms traditional study materials into interactive learning sessions. Users can upload their notes, textbooks, and lecture slides and the platform automatically generates study guides, explanations, and practice exams (multiple choice, free response, and application questions).',
        skills: [Skills.AppliedAI, Skills.Azure, Skills.FullStackWebDev, Skills.React, Skills.ChakraUI, Skills.DatabaseManagement, Skills.SQL, Skills.NextJS, Skills.Node, Skills.TypeScript, Skills.UIUX],
        image: 'https://www.chatedu.tech/logo.png',
        githubUrl: 'https://github.com/chat-edu/chat-edu',
        demoUrl: 'https://www.chatedu.tech/',
        images: [
            {
                src: '/projects/chatEdu/cover.png',
                caption: 'Cover'
            },
            {
                src: '/projects/chatEdu/chat.png',
                caption: 'Interactive Tutor'
            },
            {
                src: '/projects/chatEdu/home.png',
                caption: 'Explore'
            },
            {
                src: '/projects/chatEdu/note.png',
                caption: 'Note'
            },
            {
                src: '/projects/chatEdu/leaderboard.png',
                caption: 'Leaderboard'
            },
            {
                src: '/projects/chatEdu/architecture.png',
                caption: 'Technical Architecture'
            }
        ],
        startDate: 'Oct 2023',
        endDate: 'Present'
    },
    {
        name: 'BRAWL3R',
        description: 'Online multiplayer 2D platform fighter game composable, interoperable in-game NFTs',
        skills: [Skills.Unity, Skills.SmartContractDev, Skills.Move, Skills.GameDev, Skills.Photon, Skills.CSharp, Skills.Blockchain, Skills.GraphicDesign, Skills.UIUX],
        image: 'https://www.brawl3r.com/favicon.png',
        extendedDescription: 'BRAWL3R is an online multiplayer fighter game with interoperable in-game NFTs. Players can battle each other in real-time and earn NFTs that can be used in other games. BRAWL3R is built with Unity, C#, Photon, and Move.',
        githubUrl: 'https://github.com/aptos-arcade',
        demoUrl: 'https://www.brawl3r.com/',
        images: [
            {
                src: '/projects/brawl3r/cover.png',
                caption: 'Cover'
            },
            {
                src: '/projects/brawl3r/gameplay.png',
                caption: 'Gameplay'
            },
            {
                src: '/projects/brawl3r/brawler.png',
                caption: 'Brawler Creation'
            },
            {
                src: '/projects/brawl3r/leaderboard.png',
                caption: 'Leaderboard'
            }
        ],
        startDate: 'Mar 2023',
        endDate: 'Present'
    },
    {
        name: 'Satay Finance',
        description: 'DeFi aggregator offering composable yield strategies and auto-compounding vaults on Aptos',
        skills: [Skills.FinancialEngineering, Skills.SmartContractDev, Skills.Move],
        image: 'https://www.satay.finance/logo.png',
        extendedDescription: 'Satay Finance is DeFi aggregator on Aptos that offers composable yield-generating strategies and auto-compounding vaults. Users can stake their assets in a range of structured products, each with their own risk and reward profile.',
        githubUrl: 'https://github.com/satay-protocol',
        demoUrl: 'https://www.satay.finance/',
        images: [
            {
                src: '/projects/satay/diagram.png',
                caption: 'Architecture'
            },
            {
                src: '/projects/satay/vaults.png',
                caption: 'Vaults'
            },
            {
                src: '/projects/satay/strategies.png',
                caption: 'Strategies'
            },
            {
                src: '/projects/satay/blocks.png',
                caption: 'Blocks'
            },
            {
                src: '/projects/satay/bridge.png',
                caption: 'Layer Zero Bridge'
            }
        ],
        startDate: 'Aug 2022',
        endDate: 'Present'
    },
    {
        name: 'Decentralese',
        description: 'Zero-collateral NFT renting and leasing for game assets on Polygon using ERC-4907',
        skills: [Skills.SmartContractDev, Skills.Solidity],
        image: 'https://www.decentra.lease/favicon.ico',
        extendedDescription: 'Decentralese is a zero-collateral NFT renting and leasing market on Polygon that utilizes the novel ERC-4907 standard. The platform aims to unlock liquidity and lower barriers to entry for gaming assets.',
        githubUrl: 'https://github.com/decentralease',
        demoUrl: 'https://www.decentra.lease/',
        images: [
            {
                src: '/projects/decentralease/home.png',
                caption: 'Home'
            },
            {
                src: '/projects/decentralease/rentalAgreement.png',
                caption: 'Rental Agreement'
            },
            {
                src: '/projects/decentralease/decentralandRental.jpeg',
                caption: 'Decentraland Rental'
            },
            {
                src: '/projects/decentralease/vision.jpeg',
                caption: 'Grand Vision'
            }
        ],
        startDate: 'Jul 2022',
        endDate: 'Aug 2022'
    },
    {
        name: 'Smarter Barter',
        description: 'Financial literacy and community service program for students in New York City.',
        skills: [Skills.ReactNative, Skills.Firebase, Skills.GoogleCloud, Skills.ProductManagement],
        image: 'https://creditdo-admin.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75',
        extendedDescription: 'Credit Do is a non-profit that aims to empower underpriviledged students in New York City with its Smarter Barter program. The program is broken into three parts: learn, work, and earn. Students first complete a financial literacy course through their math class, then work a local community service event, and finally earn a college savings deposit and meal stipend. \n \n \n I developed the Smarter Barter student mobile app and teacher admin dashboard.',
        githubUrl: 'https://github.com/credit-do',
        demoUrl: 'https://creditdo-admin.vercel.app/',
        images: [
            {
                src: '/projects/creditDo/adminClass.png',
                caption: 'Class Overview'
            },
            {
                src: '/projects/creditDo/adminLearn.png',
                caption: 'Lesson Management'
            },
            {
                src: '/projects/creditDo/studentLanding.png',
                caption: 'Student App'
            },
            {
                src: '/projects/creditDo/studentGoals.png',
                caption: 'Student Goal Setting'
            }
        ],
        startDate: 'Sep 2021',
        endDate: 'Apr 2023'
    },
    {
        name: 'Moneyline',
        description: 'Decentralized betting market where users can trade sports teams like stocks',
        skills: [Skills.SmartContractDev, Skills.Solidity, Skills.dAppDev, Skills.iOSDev, Skills.AndroidDev, Skills.FinancialEngineering, Skills.Firebase, Skills.Blockchain, Skills.Calculus, Skills.GoogleCloud, Skills.ReactNative, Skills.Solidity],
        image: 'https://media.licdn.com/dms/image/C4E0BAQH6uAdSN9C0EA/company-logo_100_100/0/1630633790771?e=1711584000&v=beta&t=sZUkrVC8T8irHEDAOBQsrDqjTkgGauLATqzYiRGpOBc',
        extendedDescription: 'Moneyline is a decentralized betting market where users can trade sports teams like stocks. Each team is tokenized and priced using a proprietary automated market maker. Launched to 500 users during the 2020 March Madness tournament, Moneyline was the first dApp to offer a fully decentralized betting experience.',
        githubUrl: 'https://github.com/fantxchange',
        demoUrl: '',
        images: [
            {
                src: '/projects/moneyline/portfolio.PNG',
                caption: 'Portfolio Screen'
            },
            {
                src: '/projects/moneyline/team.PNG',
                caption: 'Team Screen'
            },
            {
                src: '/projects/moneyline/explore.PNG',
                caption: 'Home Screen'
            },
            {
                src: '/projects/moneyline/game.PNG',
                caption: 'Live Game Screen'
            }
        ],
        startDate: 'Mar 2020',
        endDate: 'Jul 2022'
    },
    {
        name: 'PikApp',
        description: 'Map-based app for finding and coordinating pickup sporting events',
        skills: [Skills.ReactNative, Skills.GoogleMapsAPI],
        image: 'https://media.licdn.com/dms/image/C4E0BAQG4SYS8gVthhA/company-logo_100_100/0/1630623221285?e=1711584000&v=beta&t=Xcc3Ox-CChPTEh1Nsudd5Q0_nXQQA593wcPIS4RKaV4',
        extendedDescription: 'PikApp is a map-based app for finding and coordinating pickup sporting events. It utilizes Google Places for suggesting locations and geohashing for distance calculations and intelligent event suggestions.',
        githubUrl: '',
        demoUrl: 'https://apps.apple.com/us/app/pikapp-mobile/id1475855291',
        images: [
            {
                src: '/projects/pikapp/find.png',
                caption: 'Find Games'
            },
            {
                src: '/projects/pikapp/join.png',
                caption: 'Join Events'
            },
            {
                src: '/projects/pikapp/compete.png',
                caption: 'Track Stats'
            },
            {
                src: '/projects/pikapp/profile.png',
                caption: 'Share Profile'
            }
        ],
        startDate: 'Jun 2018',
        endDate: 'Mar 2020'
    },
    {
        name: 'Real Vision Bot Portfolio',
        description: 'Collective investment DAO for Real Vision Pro Crypto NFT holders.',
        skills: [Skills.SmartContractDev, Skills.FullStackWebDev],
        image: 'https://yt3.googleusercontent.com/riWTZgtzm4m3UOTG8MMnTal7i7EfV1rWEhzS5Y1m_3ineiBKylbhoYjAacT2ZWP7skSAqpmC=s900-c-k-c0x00ffffff-no-rj',
        extendedDescription: 'Real Vision Bot Portfolio is a collective investment DAO for Real Vision Pro Crypto NFT holders. Each week, users vote on a new portfolio allocation and the smart contract automatically rebalances the portfolio.',
        githubUrl: '',
        demoUrl: '',
        images: [],
        startDate: 'Apr 2021',
        endDate: 'Oct 2021'
    },
    {
        name: 'Aptostream',
        description: 'Programmable continuous and event-based payment protocol on Aptos',
        skills: [Skills.FinancialEngineering, Skills.dAppDev],
        image: 'https://aptostream.com/logo.png',
        extendedDescription: 'Aptostream is a programmable continuous and event-based payment protocol on Aptos. It allows users to pay salary by the second, trigger payments based on events, and create custom payment schedules.',
        githubUrl: '',
        demoUrl: '',
        images: [],
        startDate: 'Apr 2023',
        endDate: 'May 2023'
    },
]

export default projects;