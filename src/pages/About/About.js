import classes from "./About.module.scss";

const About = () => {
  return (
    <div className={classes.About}>
      <div>
        <h1>Информация</h1>
        <p>Версия приложения: <strong>0.0.1</strong></p>
      </div>
    </div>
  );
};

export default About;
