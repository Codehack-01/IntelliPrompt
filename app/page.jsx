import Feed from '@components/Feed';



const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
        <h1 className="head_text text-center font-Bricolage">
            Compose & Discover <br className="max-md:hidden"/>
            <span className="head_text orange_gradient text-center">AI-Powered Prompt</span>
            
        </h1>
        {/* <span className="head_text orange_gradient text-center">AI-Powered Prompts</span> */}
        <p className="desc text-center font-Bricolage">IntelliPrompt is an open-source AI prompting tool for modern world to discover, create and share creative prompts. Find the  best prompts to solve your problems without breaking a sweat.</p>

        <Feed />
    </section>
  )
}

export default Home;