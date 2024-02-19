"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import InfoBox from "../../components/layout/InfoBox";
import SuccessBox from "../../components/layout/successBox";
import toast from "react-hot-toast";
import Link from "next/link";
import UserTabs from "@/components/layout/UserTabs";

function ProfilePage() {
  const session = useSession();
  const { status } = session;
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);

  //   const [saved, setSaved] = useState(false);
  //   const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setUsername(session?.data?.user?.name);
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setPhone(data.phone);
          setStreetAddress(data.streetAddress);
          setPostalCode(data.postalCode);
          setCity(data.city);
          setCountry(data.country);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        });
      });
    }
  }, [session, status]);

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault();
    // setSaved(false);
    // setIsSaving(true);
    // toast("Saving...", {duration: 1000});
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: username,
          phone,
          streetAddress,
          postalCode,
          city,
          country,
        }),
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile Saved!",
      error: "Error",
    });

    // setIsSaving(false);
    // toast.success("Saving Completed");
    // if (response.ok) {
    //     toast.success("Profile Updated");
    // //   setSaved(true);
    // }
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

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data.user.image;
  return (
    <section className="mt-8">
      <UserTabs isAdmin={isAdmin} />
      {/* <h1 className="mb-4 text-4xl text-center text-primary">Profile</h1> */}
      <div className="max-w-md mx-auto mt-8">
        {/* Remove after installing react-hot-toast library */}
        {/* {saved && (
        //   <div className="p-4 text-center bg-green-100 border border-green-300 rounded-lg">
        //     Profile Saved
        //   </div>
          <SuccessBox>Profile Saved</SuccessBox>
        )} */}
        {/* Remove after installing react-hot-toast library */}
        {/* {isSaving && (
        //   <div className="p-4 text-center bg-blue-100 border border-blue-300 rounded-lg">
        //     Saving...
        //   </div>
        <InfoBox>Saving...</InfoBox>
        )} */}
        <div className="flex gap-4">
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
            <label>First and Last Name</label>
            <input
              type="text"
              placeholder="First and Last name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>E-mail</label>
            <input
              type="email"
              disabled={true}
              value={session.data.user.email}
            />
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Street Address</label>
            <input
              type="text"
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <div className="flex gap-2">
            <div>
            <label>Postal Code</label>
              <input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div>
            <label>City</label>
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div> 
            </div>
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
