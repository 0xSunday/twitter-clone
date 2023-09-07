import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex gap-3 flex-row w-full p-3">
      <div>
        <Image
          className="w-11 rounded-full"
          src="/logo.webp"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row">
          <p className="font-bold">Sunil Reddy</p>
          <p> 0xSunilReddy</p>
        </div>

        <div>
          <p>
            Staring a new journey.... Thank you @warikoo and @AliAbdaal for your
            recommendations ❤️
          </p>
        </div>

        <div>
          <Image
            className="w-full h-full "
            src="/logo.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <div className="flex flex-row items-center justify-between">
          <p>likes</p>
          <p>retweet</p>
          <p>comment</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
