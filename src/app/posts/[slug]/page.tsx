import {
  getPostBySlug,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";

import { Metadata } from "next";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const featuredMedia = await getFeaturedMediaById(post.featured_media);
  const author = await getAuthorById(post.author);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await getCategoryById(post.categories[0]);

  return (
    <div className="flex justify-center lg:max-w-[900px] mx-auto items-center h-full">
      <div className="mt-20 w-full px-4">
        <h1 className="text-black text-2xl font-bold">
          <Balancer>
            <span>{post.title.rendered}</span>
          </Balancer>
        </h1>
        <div className="flex mt-8 justify-between items-center gap-4 text-sm">
          <h5>
            Published {date} by{" "}
            {author.name && (
              <span>
                <a href={`/posts/?author=${author.id}`} className="underline">{author.name} </a>{" "}
              </span>
            )}
          </h5>
          <Link href={`/posts/?category=${category.id}`}>{category.name}</Link>
        </div>
        <div className="h-96 md:h-[560px] overflow-hidden flex items-center justify-center rounded-lg bg-accent/25">
          <img
            className="w-full rounded-3xl object-cover"
            src={featuredMedia.source_url}
            alt={post.title.rendered}
          />
        </div>
        <article
          className="prose prose-lg dark:prose-dark mt-8 max-w-none"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered.replace(
              /<img/g,
              '<img class="max-w-full h-auto mx-auto"'
            ).replace(
              /class="wp-image-/g,
              'class="max-w-full h-auto mx-auto wp-image-'
            ).replace(
              /<figure class="wp-block-image/g,
              '<figure class="wp-block-image max-w-full h-auto mx-auto'
            )
          }}
        />
      </div>
    </div>
  );
}
