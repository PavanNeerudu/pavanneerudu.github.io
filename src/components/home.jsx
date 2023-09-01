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
                        <p>Welcome to my personal website. I am a Software Engineer at Microsoft and a 2023 Computer Sciences graduate student from National Institute Of Technology, Warangal.  My academic background involves hands-on experience in computer sciences courses ranging from Web Development, Database Management to Data Science, and Computer Networks.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 box2" id="linktohome">
                        <p>I am keen to up-skill myself by learning new things whenever I get a chance. During my internship with Hybrid Azure Kubernetes Services at Microsoft, I learnt about kubernetes, added GPU plugins for Azure Kubernetes Services on Azure Stack HCI, and gained valuabe industry knowledge.</p>
                        <p>Currently, I am working as a Software Engineer in the same team.</p>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;