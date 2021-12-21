import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h3 className="a-sub">
          {" "}
          Hey , I am a Full Stack Web Developer from India
        </h3>
        <p className="a-desc">
          Fast load times and lag free interaction, my highest priority.
        </p>
        <p>My layouts will work on any device, big or small.</p>
        <p>Strong preference for easy to use, intuitive UX/UI.</p>
        <p>
          Websites don't have to be static, I love making pages come to life.
        </p>
        <div className="a-award">
          <img
            src="https://images-platform.99static.com//Wrisfu9BQQZDWOgH8lqGSwcxR9s=/702x3277:1300x3876/fit-in/500x500/99designs-contests-attachments/121/121844/attachment_121844903"
            alt=""
            className="a-award-img"
          />
          <div className="a-award-texts">
            <h4 className="a-award-title"> Web Developement </h4>
            <p className="a-award-desc"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
