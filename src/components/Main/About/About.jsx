import { useEffect } from "react";
import { useLoader } from "../../Context/LoaderContext";
import "./About.scss";

const About = () => {
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true)

    return () =>{
      setIsLoading(false)
    }
  }, [setIsLoading])

  return (
    <article className="about_container">
      <h2>Maintenance work in progress</h2>
    </article>
  )
}

export default About