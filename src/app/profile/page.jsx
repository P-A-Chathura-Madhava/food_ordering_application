"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import InfoBox from "../../components/layout/InfoBox";
import SuccessBox from "../../components/layout/successBox";

function ProfilePage() {
  const session = useSession();
  const { status } = session;
  const [username, setUsername] = useState("");
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setUsername(session?.data?.user?.name);
    }
  }, [session, status]);

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username }),
    });
    setIsSaving(false);
    if (response.ok) {
      setSaved(true);
    }
  };

  const handleFileChange = async (e) => {
    console.log("upload");
    // e.preventDefault();
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
    }
  };

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data.user.image;
  return (
    <section className="mt-8">
      <h1 className="mb-4 text-4xl text-center text-primary">Profile</h1>
      <div className="max-w-md mx-auto">
        {saved && (
        //   <div className="p-4 text-center bg-green-100 border border-green-300 rounded-lg">
        //     Profile Saved
        //   </div>
          <SuccessBox>Profile Saved</SuccessBox>
        )}
        {isSaving && (
        //   <div className="p-4 text-center bg-blue-100 border border-blue-300 rounded-lg">
        //     Saving...
        //   </div>
        <InfoBox>Saving...</InfoBox>
        )}
        <div className="flex items-center gap-4">
          <div>
            <div className="relative p-2 rounded-lg max-w-[120px]">
              <Image
                className="w-full h-full mb-1 rounded-lg"
                src={userImage}
                width={250}
                height={250}
                alt={"avatar"}
              />
              <label>
                <input
                  className="hidden"
                  type="file"
                  onChange={handleFileChange}
                />
                <span className="block p-2 text-center border border-gray-300 rounded-lg cursor-pointer">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="First and Last name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              disabled={true}
              value={session.data.user.email}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
