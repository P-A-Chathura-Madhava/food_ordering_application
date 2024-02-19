"use client";
import { useEffect, useState } from "react";
import UserTabs from "../../components/layout/UserTabs";
import useProfile from "@/components/useProfile"

function CategoriesPage() {
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [adminInfoLoading, setAdminInfoLoading] = useState(true);
  // useEffect(()=>{
  //   setAdminInfoLoading(true);
  //   fetch("/api/profile").then(response => {
  //     response.json().then(data => {
  //       setIsAdmin(data.admin);
  //       setAdminInfoLoading(false);
  //     });
  //   })
  // }, []);
  // if (adminInfoLoading) {
  //   return "Loading user info..."
  // }
  // if (!isAdmin) {
  //   return "Not an admin";
  // }
  const {loading: profileLoading, data: profileData} = useProfile();
  if (profileLoading) {
    return "Loading user info...";
  }

  if (!profileData.admin) {
    return "Not an admin";
  }

  return (
    <section className="max-w-lg mx-auto mt-8">
        <UserTabs isAdmin={true} />
        categories
    </section>
  )
}

export default CategoriesPage