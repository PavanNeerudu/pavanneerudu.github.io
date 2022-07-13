import '../styles/home.css'

function Home() {
    return (
        <div id="home" class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-4">
                    <div class="box">
                        <img src="https://drive.google.com/uc?export=view&id=1OgG4WY1iq0JG8tpqaYyWmRCaDPip_kwR" />
                    </div>
                </div>
                <div class="col-xs-12 col-sm-8">
                    <div class="box">
                        <h1>Hey, I'm Pavan</h1>
                        <hr align="center" />
                        <p>I am a Computer Sciences undergraduate student graduating in Summer of 2023 from National Institute Of Technology, Warangal.  My academic background involves hands-on experience in computer sciences courses ranging from Web Development, Database Management to Data Science, and Computer Networks.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 box2" id="linktohome">
                        <p>I am an enthusisatic and disciplined soul. I am always keen to up-skill myself by learning new things whenever I get a chance. During my internship with Azure Kubernetes Services at Microsoft, I learnt about kubernetes, added GPU plugins for Azure Kubernetes Services on Azure Stack HCI, and gained valuabe industry knowledge.</p>
                        <p>My strengths are my analytical approach, my appreciable communication, and presentation skills. I believe in being realistic. In my free time, I love exploring new technologies, reading novels and spending time with friends. </p>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;