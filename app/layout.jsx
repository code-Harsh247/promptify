import '@styles/global.css'

export const metadata = {
    title: "Promptify",
    description: 'Discover & share AI prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout