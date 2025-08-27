import { useEffect } from "react";
import { useLoader } from "../../Context/LoaderContext";
import "./Blog.scss"

const Blog = () => {
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);

    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);
  return (
    <article className="blog_container">
      <h2>Maintenance work in progress</h2>
    </article>
  );
};

export default Blog;
