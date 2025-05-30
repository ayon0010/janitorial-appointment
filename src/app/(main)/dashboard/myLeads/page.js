"use client";

import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import GetData from "@/lib/GetData";
import Table from "@/Shared/Table";
import SectionTitles from "@/Shared/SectionTitles";
import dynamic from "next/dynamic";
import React from "react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
const Loading = dynamic(() => import("../../loading"), { ssr: false });
import image3 from "@/../public/assets/slide03.jpg";
import PageSection from "@/Shared/PageClient";

const Page = () => {
  // User
  const { user } = useAuth();
  const [uid, setUid] = useState(null)

  useEffect(() => {
    // user id
    const uid = user?.uid;
    setUid(uid)
  }, [user])

  if (!uid) return <Loading />

  const {
    data: savedLeads = [],
    refetch,
    isLoading,
  } = GetData(uid, `savedLeads/${uid}`);
  console.log(savedLeads);

  const axiosSecure = useAxiosSecure();

  const removeBookmarks = (id) => {
    // Show loading Swal
    Swal.fire({
      title: "Removing Bookmark...",
      text: "Please wait while we remove the bookmark.",
      icon: "info",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading(); // Show loading spinner
      },
    });

    // Axios request to remove bookmark
    axiosSecure
      .delete(`/bookmarks/${user?.uid}/${id}`)
      .then((res) => {
        // Close the loading Swal and show success Swal
        Swal.fire({
          title: "Success!",
          text: "Bookmark has been successfully removed.",
          icon: "success",
          confirmButtonText: "OK",
        });
        refetch(); // Refetch to get updated status from the server
      })
      .catch((err) => {
        // Close the loading Swal and show error Swal
        Swal.fire({
          title: "Error!",
          text: "There was an error removing the bookmark. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const Button = ({ id }) => {
    return (
      <button
        onClick={() => removeBookmarks(id)}
        className="rounded-lg btn btn-outline text-red-600 hover:bg-red-600 hover:text-white"
      >
        Delete
      </button>
    );
  };

  return (
    <div>
      <PageSection
        title={<>Dashboard</>}
        text={<>Manage leads</>}
        image={image3}
      />
      <div className="pt-20 pb-20 px-10">
        <SectionTitles heading={"Bookmarked"} subHeading={"Saved leads"} />
        {isLoading ? (
          <Loading />
        ) : (
          <Table
            tableHead={[
              "Leads",
              "Location",
              "Opportunity Type",
              "Date",
              "Status",
              "View Details",
              "Action",
            ]}
            data={savedLeads}
            Button={Button}
            bookMarks={true}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
