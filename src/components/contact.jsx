import '../styles/contact.css'
function Contact() {
    return (
        <>
            <div id="contact">
                <div id="contact" className="container">
                    <div className="row justify-content-center mb-2 pb-3">
                        <div className="col-md-7 heading-section text-center">
                        <span class="heading-meta">Contact</span>
                        <h2 class="projects-heading">Let's Connect 👋</h2>
                        </div>
                    </div>
                </div>


                <div class="container contact-container">
                    <div class="screen">
                        <div class="screen-header">
                            <div class="screen-header-left">
                                <div class="screen-header-button close"></div>
                                <div class="screen-header-button maximize"></div>
                                <div class="screen-header-button minimize"></div>
                            </div>
                            <div class="screen-header-right">
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <span>CONTACT</span>
                                    <span>ME</span>
                                </div>
                                <div class="app-contact"></div>
                            </div>



                            <div class="screen-body-item">
                                <div class="app-form">
                                    <form method='POST' action="https://formspree.io/f/mgedjqva">
                                        <div class="app-form-group">
                                            <input type="text" class="app-form-control" name="name" placeholder="Name" required/>
                                        </div>
                                        <div class="app-form-group">
                                            <input type="email" class="app-form-control" name="_replyto" placeholder="Email" required/>
                                        </div>
                                        <div class="app-form-group">
                                            <input type="number" class="app-form-control" name="phone" placeholder="Contact No" />
                                        </div>
                                        <div class="app-form-group message">
                                            <textarea class="app-form-control" rows="2" cols="10" name="message" placeholder="Message" defaultValue={""} />
                                        </div>
                                        <div class="app-form-group buttons">
                                            <button type="reset" class="app-form-button">Reset</button>
                                            <button type="submit" defaultValue="Send Message" class="app-form-button">Send</button>
                                        </div>
                                    </form>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;