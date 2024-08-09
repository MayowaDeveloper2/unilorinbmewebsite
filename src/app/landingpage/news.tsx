import { getAllPosts } from "@/lib/wordpress";
import { Section, Container } from "@/component/ui/craft";
import PostCard from "@/component/posts/post-card";

export default async function Page() {
  const posts = await getAllPosts();

  // Display only the first 4 posts
  const postsToShow = posts.slice(0, 4);

  return (
    <Section>
      <Container>
        {postsToShow.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 p-4">
            {postsToShow.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center">
            <p>No Results Found</p>
          </div>
        )}

        <div className="mt-3 text-center">
          <a
            href="/allposts"
            className="inline-block px-6 py-3 text-white bg-customBlue rounded-lg hover:bg-customeYellow"
          >
            See More
          </a>
        </div>
      </Container>
    </Section>
  );
}
