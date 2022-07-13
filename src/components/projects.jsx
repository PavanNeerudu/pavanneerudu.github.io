import '../styles/project.css'
function Projects() {
    return (
        <div id="projects">
            <span class="heading-meta">My Work</span>
            <h2 class="projects-heading">Recent Projects</h2>
            <div id="main">
                <div class="section">
                    <a href="https://github.com/pavanNeerudu/PalindromeChecker">
                        <div class="card card-crd">
                            <div class="card-body">
                                <div class="card-title text-bold">CRD and its controller in Kubernetes</div>
                                <div class="card-duration">June 2022</div>
                                <div class="card-text text-muted">Built a Custom Resource Defintion called <strong>PalindromeChecker</strong> in K8s. It has an input filed that contains a string. The <strong>k8s</strong> cluster will be configured using this CRD. The created Controller/Operator keeps an eye on this resource and after getting the resource, removes first and last character if they are same and updates the status. The process repeats and if at any point the check fails, the process stops and status changes to <strong>Not Palindrome</strong>, else it become <strong>Palindrome</strong> finally.</div>
                            </div>
                            <div class="card-footer">
                                <div class="card-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7paj6VHcy6QlxI2UJ0LkVat3H4bIsAct0w&usqp=CAU" alt="Kubernetes" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="section">
                    <a href="https://github.com/pavanNeerudu/online_restaurant">
                        <div class="card card-restaurant">
                            <div class="card-body">
                                <div class="card-title text-bold">Website for a fictional Restaurant</div>
                                <div class="card-duration">Aug-Nov 2021</div>
                                <div class="card-text text-muted">Built a website for a fictional restaurant. The restaurant website allows users to browse the restaurant menu and order their meals, book a table at the restaurant as well as give feedback to the restaurant. The website was build using HTML, CSS, JavaScript and MongoDB. Various Software Engineering concepts such as Work Break Structure, Project Scheduling, Software Requirements Specification, Life Cycle Models and Testing were also used. The website is deployed <a href="http://indiflav.herokuapp.com/">here.</a></div>
                            </div>
                            <div class="card-footer">
                                <div class="card-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfxIAE6ccShL67P4_NOJ9FGhyTM0J9RSQVA&usqp=CAU" alt="" />
                                </div>
                            </div>
                        </div>
                    </a>
                    {/*
                <div class="card card-karma">
                    <div class="card-body">
                        <div class="card-title text-bold">Karma</div>
                        <div class="card-text text-muted">Regularly evaluates our talent to ensure quality</div>
                    </div>
                    <div class="card-footer">
                        <div class="card-img">
                            <img src="https://rvs-four-card-feature-section.netlify.app/images/icon-karma.svg" alt=""/>
                        </div>
                    </div>
    </div>*/}
                </div>

                <div class="section">
                    <a href="https://github.com/pavanNeerudu/Database-for-Messaging-System">
                        <div class="card card-database">
                            <div class="card-body">
                                <div class="card-title text-bold">Database for Messaging System</div>
                                <div class="card-duration">Feb-Apr 2021</div>
                                <div class="card-text text-muted">We all love to communicate. A system of communication is the above messaging system. A database model for a messaging system which can fit into variety of modern day systems was built. It includes entities such as user, message, user_contact, message_recipient, device_details and many more. Later, a database model with these entities and the relationships in between them was designed. Then, this messaging system database was created using <strong>Oracle Sql Developer.</strong></div>
                            </div>
                            <div class="card-footer">
                                <div class="card-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFNVU5VakF4Uc3tX2BYpnrDsDfOdy5pfjTA&usqp=CAU" alt="" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div >
        </div>
    )

}
export default Projects;