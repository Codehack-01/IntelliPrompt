import '@styles/global.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { Suspense } from 'react'
import Head from 'next/head';

export const metadata = {
    title: "IntelliPrompt",
    description: 'Compose & discover AI-powered Prompts'
    
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                
                <main className='app'>
                    <Nav/>
                    <Suspense>
                        {children}
                    </Suspense>
                    
                </main>
            </Provider>
            
        </body>
    </html>
  )
}

export default RootLayout;