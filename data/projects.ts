import {Skills} from "@/data/skills";

import {Project} from "@/types/Project";
import {Languages} from "@/data/languages";
import {Libraries} from "@/data/libraries";

const projects: Project[] = [
    {
        name: 'The Hive',
        description: 'AI-enhanced token research and analysis platform on Solana',
        showcase: [Skills.SmartContractDev, Skills.dAppDev],
        image: '/logos/hive.png',
        extendedDescription: 'An interactive platform that analyzing tokens, liquidity pools, notable addresses, and trading activity on Solana.',
        githubUrl: 'https://github.com/jasonhedman/the-hive',
        demoUrl: 'https://www.askthehive.ai',
        images: [
            {
                src: '/projects/hive/home.png',
                caption: 'Home'
            },
            {
                src: '/projects/hive/token-page.png',
                caption: 'Token Page'
            },
            {
                src: '/projects/hive/swap.png',
                caption: 'Swap'
            },
            {
                src: '/projects/hive/liquidity.png',
                caption: 'Liquidity'
            },
            {
                src: '/projects/hive/trending.png',
                caption: 'Trending'
            },
            
        ],
        skills: [Skills.SmartContractDev, Skills.dAppDev, Skills.Blockchain, Skills.ProductManagement, Skills.UIUX],
        languages: [Languages.Rust, Languages.TypeScript],
        libraries: [Libraries.React, Libraries.NextJS, Libraries.ChakraUI, Libraries.Solana],
        startDate: 'Dec 2024',
        endDate: 'Present',
    },
    {
        name: 'ChatEDU',
        description: 'Virtual tutor that transforms traditional study materials into interactive learning sessions',
        showcase: [Skills.AppliedAI, Skills.FullStackWebDev],
        extendedDescription: 'ChatEDU is a dynamic virtual tutor that transforms traditional study materials into interactive learning sessions. Users can upload their notes, textbooks, and lecture slides and the platform automatically generates study guides, explanations, and practice exams (multiple choice, free response, and application questions).',
        image: '/logos/chatEdu.png',
        githubUrl: 'https://github.com/chat-edu',
        demoUrl: 'https://www.chatedu.ui/',
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
        languages: [Languages.TypeScript, Languages.CSharp, Languages.Python, Languages.SQL],
        libraries: [Libraries.React, Libraries.NextJS, Libraries.GPT, Libraries.AzureCosmos, Libraries.AzureAiSearch, Libraries.AzureActiveDirectory, Libraries.AzureDocumentIntelligence, Libraries.AzureStaticWebApps, Libraries.Langchain],
        skills: [Skills.AppliedAI, Skills.Azure, Skills.FullStackWebDev, Skills.DatabaseManagement, Skills.UIUX, Skills.ProductManagement],
        startDate: 'Oct 2023',
        endDate: 'Present',
    },
    {
        name: 'BRAWL3R',
        description: 'Online multiplayer 2D platform fighter game with composable, interoperable in-game NFTs',
        showcase: [Skills.GameDev, Skills.SmartContractDev],
        image: '/logos/brawl3r.png',
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
        skills: [Skills.GameDev, Skills.SmartContractDev, Skills.Blockchain, Skills.GraphicDesign, Skills.UIUX, Skills.dAppDev],
        languages: [Languages.Move, Languages.CSharp, Languages.TypeScript, Languages.SQL],
        libraries: [Libraries.Unity, Libraries.PhotonFusion, Libraries.PhotonPun2, Libraries.AptosMove, Libraries.WebGL, Libraries.VercelPostgreSQL, Libraries.React, Libraries.NextJS, Libraries.ChakraUI, Libraries.GoogleCloudFunctions],
        startDate: 'Mar 2023',
        endDate: 'Nov 2024'
    },
    {
        name: 'Lucky Leopards Club',
        description: 'The first provably-fair, fully-on-chain, decentralized casino, powered by Aptos Randomness',
        showcase: [Skills.SmartContractDev, Skills.FinancialEngineering],
        image: '/logos/luckyLeopards.png',
        extendedDescription: 'Lucky Leopards Club is the first provably-fair, fully-on-chain casino, powered by Aptos. Users can play a range of games, including blackjack, roulette, mines, dice with the confidence that the outcomes are truly random and fair.',
        githubUrl: 'https://github.com/jasonhedman/aptosino',
        demoUrl: 'https://www.luckyleopards.club/',
        images: [
            {
                src: '/projects/luckyLeopards/architecture.png',
                caption: 'Technical Architecture'
            },
            {
                src: '/projects/luckyLeopards/blackjack.png',
                caption: 'Blackjack'
            },
            {
                src: '/projects/luckyLeopards/roulette.png',
                caption: 'Roulette'
            },
            {
                src: '/projects/luckyLeopards/mines.png',
                caption: 'Mines'
            },
            {
                src: '/projects/luckyLeopards/dice.png',
                caption: 'Dice'
            },
            {
                src: '/projects/luckyLeopards/stake.png',
                caption: 'Decentralized House'
            },
            {
                src: '/projects/luckyLeopards/club.png',
                caption: 'NFT Club'
            }
        ],
        skills: [Skills.GameDev, Skills.SmartContractDev, Skills.Blockchain, Skills.dAppDev, Skills.FinancialEngineering],
        languages: [Languages.Move, Languages.TypeScript],
        libraries: [Libraries.AptosMove, Libraries.React, Libraries.NextJS, Libraries.ChakraUI],
        startDate: 'Feb 2024',
        endDate: 'May 2024',
    },
    {
        name: 'Satay Finance',
        description: 'DeFi aggregator offering composable yield strategies and auto-compounding vaults on Aptos',
        showcase: [Skills.FinancialEngineering, Skills.SmartContractDev],
        image: '/logos/satay.png',
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
        skills: [Skills.FinancialEngineering, Skills.SmartContractDev, Skills.Blockchain, Skills.ProductManagement, Skills.Calculus, Skills.Statistics, Skills.dAppDev],
        libraries: [Libraries.AptosMove, Libraries.NextJS, Libraries.React, Libraries.ChakraUI, Libraries.GoogleCloudFunctions],
        languages: [Languages.Move, Languages.TypeScript, Languages.Python],
        startDate: 'Aug 2022',
        endDate: 'July 2024',
    },
    {
        name: 'Decentralese',
        description: 'Zero-collateral NFT renting and leasing for game assets on Polygon using ERC-4907',
        showcase: [Skills.SmartContractDev, Skills.dAppDev],
        image: '/logos/decentralease.png',
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
        skills: [Skills.SmartContractDev, Skills.dAppDev, Skills.Blockchain, Skills.ProductManagement, Skills.UIUX],
        languages: [Languages.TypeScript, Languages.Solidity],
        libraries: [Libraries.React, Libraries.NextJS, Libraries.Thirdweb, Libraries.CoinbaseWallet, Libraries.Polygon],
        startDate: 'Jul 2022',
        endDate: 'Aug 2022'
    },
    {
        name: 'Smarter Barter',
        description: 'Financial literacy and community service program for students in New York City.',
        showcase: [Skills.MobileDev, Skills.FullStackWebDev],
        image: '/logos/creditDo.png',
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
        skills: [Skills.MobileDev, Skills.FullStackWebDev, Skills.GoogleCloud, Skills.ProductManagement, Skills.iOSDev, Skills.AndroidDev, Skills.GoogleCloud],
        languages: [Languages.TypeScript, Languages.SQL],
        libraries: [Libraries.React, Libraries.NextJS, Libraries.ChakraUI, Libraries.Firebase, Libraries.GoogleCloudFunctions],
        startDate: 'Sep 2021',
        endDate: 'Apr 2023'
    },
    {
        name: 'Moneyline',
        description: 'Decentralized betting market where users can trade sports teams like stocks',
        showcase: [Skills.SmartContractDev, Skills.FinancialEngineering],
        image: '/logos/moneyline.png',
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
        skills: [Skills.SmartContractDev, Skills.FinancialEngineering, Skills.MobileDev, Skills.Blockchain, Skills.iOSDev, Skills.AndroidDev, Skills.UIUX, Skills.Statistics, Skills.Calculus, Skills.GoogleCloud, Skills.ProductManagement],
        languages: [Languages.Solidity, Languages.TypeScript, Languages.SQL],
        libraries: [Libraries.ReactNative, Libraries.Expo, Libraries.Ethereum, Libraries.MaterialUI],
        startDate: 'Mar 2020',
        endDate: 'Jul 2022'
    },
    {
        name: 'PikApp',
        description: 'Map-based app for finding and coordinating pickup sporting events',
        showcase: [Skills.MobileDev, Skills.GoogleCloud],
        image: '/logos/pikapp.png',
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
        skills: [Skills.MobileDev, Skills.GoogleCloud, Skills.iOSDev, Skills.AndroidDev, Skills.UIUX, Skills.ProductManagement, Skills.DatabaseManagement],
        languages: [Languages.TypeScript],
        libraries: [Libraries.ReactNative, Libraries.Expo, Libraries.Firebase, Libraries.GoogleMapsAPI, Libraries.GooglePlacesAPI, Libraries.MaterialUI],
        startDate: 'Jun 2018',
        endDate: 'Mar 2020'
    },
    {
        name: 'Real Vision Bot Portfolio',
        description: 'Collective investment DAO for Real Vision Pro Crypto NFT holders.',
        showcase: [Skills.FinancialEngineering, Skills.FullStackWebDev],
        image: 'https://yt3.googleusercontent.com/riWTZgtzm4m3UOTG8MMnTal7i7EfV1rWEhzS5Y1m_3ineiBKylbhoYjAacT2ZWP7skSAqpmC=s900-c-k-c0x00ffffff-no-rj',
        extendedDescription: 'Real Vision Bot Portfolio is a collective investment DAO for Real Vision Pro Crypto NFT holders. Each week, users vote on a new portfolio allocation and the smart contract automatically rebalances the portfolio.',
        githubUrl: '',
        demoUrl: '',
        images: [],
        skills: [Skills.FinancialEngineering, Skills.FullStackWebDev, Skills.dAppDev, Skills.DatabaseManagement, Skills.Blockchain, Skills.UIUX],
        languages: [Languages.Solidity, Languages.TypeScript],
        libraries: [Libraries.React, Libraries.Ethereum, Libraries.NextJS, Libraries.CoinbaseWallet, Libraries.ChakraUI],
        startDate: 'Apr 2021',
        endDate: 'Oct 2021'
    },
    // {
    //     name: 'Aptostream',
    //     description: 'Programmable continuous and event-based payment protocol on Aptos',
    //     showcase: [Skills.FinancialEngineering, Skills.dAppDev],
    //     image: '/logos/aptostream.png',
    //     extendedDescription: 'Aptostream is a programmable continuous and event-based payment protocol on Aptos. It allows users to pay salary by the second, trigger payments based on events, and create custom payment schedules.',
    //     githubUrl: '',
    //     demoUrl: '',
    //     images: [],
    //     skills: [Skills.FinancialEngineering, Skills.dAppDev, Skills.SmartContractDev, Skills.Blockchain, Skills.FullStackWebDev],
    //     languages: [Languages.Move, Languages.TypeScript],
    //     libraries: [Libraries.AptosMove, Libraries.React, Libraries.NextJS, Libraries.ChakraUI],
    //     startDate: 'Apr 2023',
    //     endDate: 'May 2023'
    // },
]

export default projects;