import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coding-design-template-7fdcbfed1fb311be96a282920fba8515_screen.jpg?ts=1599184512"}
        alt={""}
        className="w-full  h-48 object-cover rounded-t-lg"
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex  flex-col items-center mt-4">
        <p
          className={`text-sm ${
            isDarkBackground ? "text-slate-400 " : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <div className="flex justify-center items-center w-full mt-4">
          <a
            href={`/post/${post.id}`}
            className={`w-48 h-12 flex justify-center items-center text-center px-6 text-white rounded hover:bg-blue-500 ${
              isDarkBackground
                ? "bg-black hover:bg-slate-500"
                : "bg-blue-600 hover:bg-blue-500"
            }`}
          >
            Read More
          </a>
        </div>
      </div>
    </Card>
  );
}
