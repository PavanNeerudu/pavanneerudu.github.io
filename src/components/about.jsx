import '../styles/about.css'
function About() {
    return (
        <div id="about">
            <div id="skills-chart" class="clearfix">
                <h3 class="chart-title"><span>My skills</span></h3>
                <ul id="chart-legend" class="clearfix">
                    <li id="label01" style={{height: "54px"}}><span class="legend-label"><strong>Uh?</strong><br/>Next question please?</span></li>
                    <li id="label02" style={{height: "54px"}}><span class="legend-label"><strong>Basic</strong>, you can't<br/>always win...</span></li>
                    <li id="label03" style={{height: "54px"}}><span class="legend-label"><strong>Good</strong>, I'm trying<br/>to improve.</span></li>
                    <li id="label04" style={{height: "54px"}}><span class="legend-label"><strong>High</strong>, <br/>I'm pretty good.</span></li>
                    <li id="label05" style={{height: "54px"}}><span class="legend-label">I'm the <strong>master</strong><br/>of this skill.</span></li>
                </ul>
                
                <ul id="chart-data" class="">
                    <li id="bar01"><div class="data-bar" style={{height:"152px"}}><span class="data-label" data-abbr="" style={{opacity: "1"}}><span>C</span></span></div></li>
                    <li id="bar02"><div class="data-bar" style={{height:"193px"}}><span class="data-label" data-abbr="" style={{opacity: "1"}}><span>C++</span></span></div></li>
                    <li id="bar03"><div class="data-bar" style={{height:"146px"}}><span class="data-label" data-abbr="" style={{opacity: "1"}}><span>Java</span></span></div></li>
                    <li id="bar09"><div class="data-bar" style={{height:"135px"}}><span class="data-label" data-abbr="" style={{opacity: "1"}}><span>Python</span></span></div></li>
                    <li id="bar07"><div class="data-bar" style={{height:"118px"}}><span class="data-label" data-abbr="" style={{opacity:"1"}}><span>Go</span></span></div></li>
                    <li id="bar04"><div class="data-bar" style={{height:"137px"}}><span class="data-label" data-abbr="" style={{opacity: "1"}}><span>Sql</span></span></div></li>
                    <li id="bar05"><div class="data-bar" style={{height:"160px"}}><span class="data-label" data-abbr="" style={{opacity: "1"}}><span>HTML</span></span></div></li>
                    <li id="bar06"><div class="data-bar" style={{height:"152px"}}><span class="data-label" data-abbr="" style={{opacity: "1"}}><span>CSS</span></span></div></li>
                    <li id="bar08"><div class="data-bar" style={{height:"131px"}}><span class="data-label" data-abbr="" style={{opacity: "1"}}><span>JavaScript</span></span></div></li>
    </ul>
            </div>
        </div>

    )
}
export default About;