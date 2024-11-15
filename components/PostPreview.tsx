import Link from "next/link";
import Image from "next/image";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-violet-600 hover:underline mb-4">{props.title}</h2>
        <p className="text-slate-700">{props.subtitle}</p>
        <Image
          src={props.image}
          alt={props.title}
          width={600}
          height={600}
          className="rounded-md mb-4"
        />
        <p className="text-sm text-slate-400">{props.date}</p>
      </Link>      
    </div>
  );
};

export default PostPreview;
