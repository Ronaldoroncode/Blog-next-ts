import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  // Obtém a lista de metadados dos posts
  const postMetadata = getPostMetadata();

  // Ordena os posts de forma decrescente pela data (mais recente primeiro)
  const sortedPostMetadata = postMetadata.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Inverte a lista para que o post mais antigo fique por último
  const reversedPosts = sortedPostMetadata.reverse();

  // Mapeia os posts ordenados para o componente PostPreview
  const postPreviews = reversedPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
};

export default HomePage;

