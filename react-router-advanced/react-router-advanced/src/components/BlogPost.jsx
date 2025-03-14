import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is the content of the blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
