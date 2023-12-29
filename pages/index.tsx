import Head from 'next/head'

import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Jason Hedman</title>
                <meta name="description" content="Full-stack Web3 and AI developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <Home />
            </main>
        </>
    )
}
