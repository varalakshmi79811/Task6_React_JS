export function Main() {
    return (
        <div className="main">
            <div className="container" id="home">
                <div className="navbar fixed-top bg-dark">
                    <div className="nav mt-3 ms-5">
                        <a className="navbar-brand text-white" href="#home">My Portfolio</a>
                    </div>
                    <div className="nav mt-3">
                        <a className="nav-link text-white px-5" href="#home">Home</a>
                        <a className="nav-link text-white px-5" href="#resume">Resume</a>
                        <a className="nav-link text-white px-5" href="#language">Languages</a>
                        <a className="nav-link text-white px-5" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
            <section id="resume">
                <div class="container mt-5">
                    <div class="row rounded-4">
                        <div class="col-sm-12">
                            <div class="box-shadow-full">
                                <div class="row mt-5">
                                    <div class="col-12">
                                        <div class="row text-light">
                                            <div class="col-6 text-center">
                                                <div class="about-info mt-5">
                                                    <p><span className="fs-2">Varalakshmi</span></p>
                                                    <p><span className="fs-4">Programmer</span></p>
                                                    <p><span>@varalakshmi79811</span></p>
                                                    <a className="btn btn-success" href="#contact">Contact Me!</a>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <img src={require("./main.jpg")} alt="" style={{
                                                    height: "300px",
                                                    padding: "15px",
                                                    display: "block",
                                                    marginLeft: "auto",
                                                    marginRight: "auto"
                                                }} class="rounded-5" />
                                            </div>
                                            <div class="col-12 p-4">
                                                <div class="about-me pt-4 pt-md-0">
                                                    <div class="title-box-2">
                                                        <h5 class="title-left">
                                                            About Me
                                                        </h5>
                                                    </div>
                                                    <p>
                                                    I am a passionate and open-minded individual, dedicated to personal growth and meaningful connections. Embracing life's diversity, I approach each day with enthusiasm, curiosity, and the belief that every moment is an opportunity to write my own story. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container m-5">
                <h2 className="text-light">More About Myself:</h2>
                <div className="row">
                    <ul className="col-12 col-xxl-6 list-group mt-5 ps-4">

                        <li className="list-group-item"><span className="fw-bold">Full Name: Varalakshmi Duggineni</span></li>
                        <li className="list-group-item"><span className="fw-bold">Birthday: 7th April 2004</span></li>
                        <li className="list-group-item"><span className="fw-bold">City: Guntur</span></li>
                    </ul>
                    <ul className="col-12 col-xxl-6 list-group mt-5 pe-4">
                        <li className="list-group-item"><span className="fw-bold">Git Profile: </span><a className="link" href="#">https://github.com/varalakshmi79811</a></li>
                        <li className="list-group-item"><span className="fw-bold">Age: </span>19</li>
                        <li className="list-group-item"><span className="fw-bold">Education: </span>B.Tech till 2025</li>
                    </ul>
                </div>
            </div>
            <div className="pb-5"></div>
            <div class="row border m-5 p-4 rounded-4">
                <div className="col-3 display-6 ms-5 p-5 fw-bold text-light text-center m-4" id="language">
                    Languages:
                </div>
                <div className="col-6" style={{ maxWidth: "40%", margin: "0px auto" }}>
                    <ul className="list-group">
                        <li className="list-group-item">Python</li>
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item">HTML</li>
                        <li className="list-group-item">CSS</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">ReactJS</li>
                    </ul>
                </div>
            </div>
            
            <section>
            <h1 class="p-5 ms-2 text-light">Contact:</h1>
                <div class="container">
                    <div id="contact">
                        <form>
                            <div style={{ maxWidth: "40%", margin: "0px auto" }}>
                                <div>
                                    <label for="name" class="form-label my-3 text-light">Name:</label>
                                    <input type="text" name="name" id="name" class="form-control" />
                                </div>
                                <div>
                                    <label for="email" class="form-label my-3 text-light">Email:</label>
                                    <input type="email" name="email" id="email" class="form-control" />
                                </div>
                                <div>
                                    <label for="phno" class="form-label my-3 text-light">Phone:</label>
                                    <input type="tel" name="phno" id="phno" class="form-control" />
                                </div>
                                <div>
                                    <label for="message" class="form-label my-3 text-light">Message:</label>
                                    <textarea class="form-control" rows="5"></textarea>
                                </div>
                                <div class="text-center my-5">
                                    <input type="submit" class="btn btn-primary w-25" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div class="navbar bg-secondary text-light px-5 mt-5">
                <span className="nav-link fs-4">&copy;</span>
                <a className="nav-link" href="#home">Go back</a>
            </div>
        </div >
    )
}