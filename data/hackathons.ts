import {Hackathon} from "@/types/Hackathon";

const hackathons: Hackathon[] = [
    {
        title: "Microsoft Generative AI Hackathon",
        description: "A global Microsoft hackathon focused on using Azure AI to create revolutionary multimodal experiences.",
        whatIBuilt: "An AI copilot for students that learns and works with them, not for them. The copilot processes language, video, image, PDF, and text input to create a knowledge graph and guide students through their learning objectives.",
        date: "May 2024",
        location: "Global",
        project: "ChatEDU",
        award: "1st Place"
    },
    {
        title: "Microsoft AI Classroom Hackathon",
        description: "A Microsoft challenge for students to reimagine the future of education using Azure AI and Azure Databases.",
        whatIBuilt: "A multi-agent AI education framework that optimizes learning pathways for students and synthesizes classroom insights for teachers. Employed 4 Azure AI Services and 2 Azure Databases.",
        date: "January 2024",
        location: "Global",
        project: "ChatEDU",
        award: "1st Place"
    },
    {
        title: "Coinbase x Polygon x Thirdweb Hack House",
        description: "30-day web3 gaming residence and hackathon in New York City sponsored by Coinbase, Polygon, and Thirdweb.",
        whatIBuilt: "A zero-collateral NFT rental protocol using ERC-4907 that unlocks liquidity and lowers barriers to entry for gaming NFTs. Deployed the protocol to Polygon and and demoed a rental of a Decentraland parcel.",
        date: "July 2022",
        location: "New York, New York",
        project: "Decentralease",
        award: "1st Place"
    },
    {
        title: "Aptos Hack Holland",
        description: "Aptos-specific hackathon focused on building innovative applications using Move, a novel smart contract programming language.",
        whatIBuilt: "A Move-based dynamic on-chain game asset model that enables the creation of higher-order NFTs by combining equippable NFTs. Demoed the model using BRAWL3R, where users can enhance their 'player' NFTs with 'sword' and 'gun' assets.",
        date: "June 2023",
        location: "Amsterdam, Netherlands",
        project: "BRAWL3R",
        award: "1st Place in Gaming, NFTs, and Social"
    },
    {
        title: "VandyHacks X",
        description: "Vanderbilt's annual hackathon where students compete for 36 hours to build the most innovative software applications.",
        whatIBuilt: "A web-based AI edtech application that allows students to create personalized study guides and practice tests using their own notes and course materials. Partnered with Vanderbilt's Peabody School of Education for further development.",
        date: "October 2023",
        location: "Nashville, Tennessee",
        project: "ChatEDU",
        award: "1st Place"
    },
    {
        title: "Vanderbilt Generative AI Showcase",
        description: "Vanderbilt's annual AI showcase where students present their AI projects to industry professionals and faculty.",
        whatIBuilt: "A generative learning search engine that allows lifelong learners to explore a particular topic breadth- or depth-first.",
        date: "April 2024",
        location: "Nashville, Tennessee",
        project: "ChatEDU",
        award: "2nd Place"
    },
    {
        title: "Tron Grand Hackathon",
        description: "A 60-day virtual hackathon for building dApps on the Tron and BitTorrent chains.",
        whatIBuilt: "TRC-4907 asset standard for NFT rentals on the Tron blockchain. Added variable rates for longer rentals and a 'rent-to-own' option for leasing NFTs.",
        date: "August 2022",
        location: "Virtual",
        project: "Decentralease",
        award: "1st Place in NFTs"
    },
    {
        title: "Furnace Forge",
        description: "A 30-day virtual hackathon for DeFi and Gaming projects building on Aptos - sponsored by every leading Aptos protocol.",
        whatIBuilt: "A leveraged liquid staking protocol that recusively stakes, collateralizes, and borrows against and restakes staked assets to provide ~20% APY on APT.",
        date: "March 2023",
        location: "Virtual",
        project: "Satay Finance",
        award: "1st Place in DeFi"
    },
    {
        title: "Furnace Forge",
        description: "A 30-day virtual hackathon for DeFi and Gaming projects building on Aptos - sponsored by every leading Aptos protocol.",
        whatIBuilt: "An online multiplayer 2D platform fighter that uses the blue chip Aptos NFT collections as characters; heaviest lifts include custom physics system, animations, collision mechanics, and netcode.",
        date: "March 2023",
        location: "Virtual",
        project: "BRAWL3R",
        award: "1st Place in Gaming"
    },
    {
        title: "Cornucodia",
        description: "A 30-day virtual hackathon focusing on EdTech",
        whatIBuilt: "Added two major functions to ChatEDU: the ability for users to share their interactive notebooks with others and a gamification system that rewards students for answering questions correctly and creating notebooks used by others.",
        date: "November 2023",
        location: "Virtual",
        project: "ChatEDU",
        award: "1st Place"
    }
]

export default hackathons;