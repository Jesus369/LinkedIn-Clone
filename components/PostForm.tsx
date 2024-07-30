"use client";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ImageIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

const PostForm = () => {
  const { user } = useUser();

  const ref = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }

    const handlePostAction = async (formData: FormData) => {
      const formDataCopy = formData;
      ref.current?.reset();

      const text = formDataCopy.get("postInput") as string;

      if (!text.trim()) {
        throw new Error("You must provide a post input!");
      }

      try {
        await creatPostAction(formDataCopy);
      } catch (err) {
        console.log("error creating a post ", err);
      }
    };
  };

  return (
    <div>
      <form action={(formData) => {}}>
        <div className="flex items-center space-x-2">
          <Avatar>
            {user?.id ? (
              <AvatarImage src={user?.imageUrl} />
            ) : (
              <AvatarImage src={"https://github.com/shadcn.png"} />
            )}
            <AvatarFallback>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <input
            type="text"
            name="postInput"
            placeholder="Start writing a post"
            className="flex-1 outline-none rounded-full py-3 px-4 border"
          />

          {/* This direct button for files will be hidden and instead to be Referenced */}
          <input
            ref={fileInputRef}
            type="file"
            name="image"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
          {/* Referencing the actual File button  */}
          <button type="submit" hidden>
            Post
          </button>
        </div>

        {/* Previewing our uploaded Image */}
        {preview && (
          <div className="mt-3">
            <img src={preview} alt="Preview" className="object-cover" />
          </div>
        )}

        <div className="flex justify-end mt-2 space-x-2">
          <Button onClick={() => fileInputRef.current?.click()} type="button">
            <ImageIcon className="mr-2" size={16} color="currentColor" />
            {preview ? "Change" : "Add"} Image
          </Button>
          {preview && (
            <Button>
              <XIcon className="mr-2" size={16} />
              Remove Image
            </Button>
          )}
        </div>
      </form>
      <hr className="mt-2 border-gray-300" />
    </div>
  );
};

export default PostForm;
