"use client";
import SinglePost from "@/components/HomePage/Feed/postCard/SinglePost";
import Navbar from "@/components/Navbar/Navbar";
import useFetchData from "@/hooks/useFetchData";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaGraduationCap,
  FaInstagramSquare,
  FaLinkedin,
  FaSchool,
} from "react-icons/fa";
import { HiMiniNoSymbol, HiMiniPencilSquare } from "react-icons/hi2";
import useSWR from "swr";
import styles from "../userprofile.module.css";
import useAuth from "@/hooks/useAuth";
import EditProfileModal from "@/components/OwnProfile/EditProfileModal";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { LuSchool } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";



const UserProfile = ({ params }) => {
  const [coverImage, setCoverImage] = useState("");
  // console.log(coverImage);
  const [profilePicture, setProfilePicture] = useState("");
  // console.log(profilePicture);
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const email = params.email.replace("%40", "@");

  const { data } = useFetchData(`/api/userProfile/${email}`);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: ownPosts,
    error,
    isLoading,
  } = useSWR(`/api/profile?userEmail=${data?.singleUser?.email}`, fetcher, {
    refreshInterval: 1000,
  });

  const id = data?.singleUser?._id;
  console.log(id);

  const onSubmit = (userData) => {
    const newProfileInfo = {
      name: userData?.name,
      bio: userData?.bio,
      information: {
        school: userData?.school,
        college: userData?.college,
        university: userData?.university,
        location: userData?.location,
        gender: userData?.gender,
        facebook: userData?.facebook,
        instagram: userData?.instagram,
        linkDin: userData?.linkDin,
      },
    };

    fetch(`/api/loggedInUser?id=${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProfileInfo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse and return the JSON response
        return res.json();
      })
      .then((data) => {
        console.log("Received data:", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleFacebookClick = () => {
    toast.error("Please Add your Facebook Link");
  };
  const handleInstagramClick = () => {
    toast.error("Please Add your Instagram Link");
  };
  const handleLinkDinClick = () => {
    toast.error("Please Add your LinkDIn Link");
  };
  const handleCoverPhoto = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const url =
      "https://api.imgbb.com/1/upload?expiration=600&key=f3218173624c8aebe56d3c415677e482";

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setCoverImage(data.data.url);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCoverPhotoChange = async () => {
    const url = `/api/loggedInUser?id=${id}`;
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ cover_photo: coverImage }),
      });

      if (!res.ok) {
        throw new Error("failed to fetch cover");
      }
      if (res.ok) {
        router.push(`/userProfile/${user?.email}`);
        setCoverImage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setCoverImage("");
  };

  const handleProfilePicture = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const url =
      "https://api.imgbb.com/1/upload?expiration=600&key=f3218173624c8aebe56d3c415677e482";

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setProfilePicture(data.data.url);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleProfilePictureChange = async (e) => {
    const url = `/api/loggedInUser?id=${id}`;
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ profile_picture: profilePicture }),
      });

      if (!res.ok) {
        throw new Error("failed to fetch cover");
      }
      if (res.ok) {
        router.push(`/userProfile/${user?.email}`);
        setProfilePicture("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelProfilePicture = async () => {
    setProfilePicture("");
  };

  return (
		<>
			<Navbar />

			<div className="my-container mt-20">
				<div className={`${styles.imageContainer} relative `}>
					{coverImage ? (
						<Image
							src={coverImage}
							layout="fill"
							objectFit="cover"
							className={`rounded-md `}
							alt="cover photo"
						/>
					) : (
						<Image
							src={data?.singleUser?.cover_photo}
							layout="fill"
							objectFit="cover"
							className={`rounded-md `}
							alt="cover photo"
						/>
					)}

					{user?.email !== email ? (
						<></>
					) : (
						<div className="absolute right-5 bottom-5">
							<input
								type="file"
								id="profile-btn"
								onChange={handleCoverPhoto}
								hidden
							/>
							<label for="profile-btn">
								<HiMiniPencilSquare
									size={30}
									className="text-white cursor-pointer"
								/>
							</label>
						</div>
					)}
				</div>

				<div>
					<div className="flex justify-between">
						<div className="flex">
							<div className=" mx-10 overflow-hidden -mt-16 z-40">
								<div className={`${styles.profilePic} bg-white rounded-md`}>
									{profilePicture ? (
										<Image
											src={profilePicture}
											layout="fill"
											objectFit="cover"
											alt="Profile Pic"
											className="h-40 w-40 rounded-md"
										/>
									) : (
										<Image
											src={data?.singleUser?.profile_picture}
											layout="fill"
											objectFit="cover"
											alt="Profile Pic"
											className="h-40 w-40 rounded-md"
										/>
									)}

									{user?.email !== email ? (
										<></>
									) : (
										<div className="absolute right-5 bottom-5">
											<HiMiniPencilSquare size={30} className="text-white" />
										</div>
									)}
								</div>

								<div>
									<div className="flex justify-between">
										<div className="flex">
											<div className=" mx-10 overflow-hidden -mt-16 z-40">
												<div
													className={`${styles.profilePic} bg-white rounded-md`}
												>
													{profilePicture ? (
														<Image
															src={profilePicture}
															layout="fill"
															objectFit="cover"
															alt="Profile Pic"
															className="h-40 w-40 rounded-md"
														/>
													) : (
														<Image
															src={data?.singleUser?.profile_picture}
															layout="fill"
															objectFit="cover"
															alt="Profile Pic"
															className="h-40 w-40 rounded-md"
														/>
													)}

													{user?.email !== email ? (
														<></>
													) : (
														<div className="absolute right-5 bottom-5">
															<HiMiniPencilSquare
																size={30}
																className="text-white"
															/>
														</div>
													)}
												</div>
											</div>

											<div className="text-left mt-3 w-2/4 opacity-80">
												<h3 className="text-2xl font-semibold">
													{data?.singleUser?.name}
												</h3>
												<h6 className="text-sm ">{data?.singleUser?.bio}</h6>
											</div>
										</div>

										<div className="flex items-center gap-3 mx-10">
											{data?.singleUser?.information?.facebook ? (
												<>
													<a
														href={data?.singleUser?.information?.facebook}
														target="_blank"
													>
														<FaFacebookSquare
															size={30}
															className="text-[#0e8cf1]"
														/>
													</a>
												</>
											) : (
												<button onClick={handleFacebookClick}>
													<FaFacebookSquare
														size={30}
														className="text-[#0e8cf1]"
													/>
												</button>
											)}
											{data?.singleUser?.information?.instagram ? (
												<>
													<a
														href={data?.singleUser?.information?.instagram}
														target="_blank"
													>
														<FaInstagramSquare
															size={30}
															className="text-red opacity-50"
														/>
													</a>
												</>
											) : (
												<button onClick={handleInstagramClick}>
													{' '}
													<FaInstagramSquare
														size={30}
														className="text-red opacity-50"
													/>
												</button>
											)}
											{data?.singleUser?.information?.linkDin ? (
												<>
													<a
														href={data?.singleUser?.information?.linkDin}
														target="_blank"
													>
														{' '}
														<FaLinkedin size={30} className="text-[#0a66c2] " />
													</a>
												</>
											) : (
												<button onClick={handleLinkDinClick}>
													{' '}
													<FaLinkedin size={30} className="text-[#0a66c2] " />
												</button>
											)}
										</div>
									</div>
								</div>
							</div>

							{profilePicture && (
								<div className="mt-5">
									<button
										onClick={handleProfilePictureChange}
										className="btn btn-outline btn-success mr-4"
									>
										Save
									</button>
									<button
										onClick={handleCancelProfilePicture}
										className="btn btn-outline btn-success"
									>
										Cancel
									</button>
								</div>
							)}

							<div className="text-left mt-3 w-2/4 opacity-80">
								<h3 className="text-2xl font-semibold">
									{data?.singleUser?.name}
								</h3>
								<h6 className="text-sm ">{data?.singleUser?.bio}</h6>
							</div>
						</div>

						{/* Cover Image Save Button */}
						{coverImage && (
							<div className="mt-5">
								<button
									onClick={handleCoverPhotoChange}
									className="btn btn-outline btn-success mr-4"
								>
									Save
								</button>
								<button
									onClick={handleCancel}
									className="btn btn-outline btn-success"
								>
									Cancel
								</button>
							</div>
						)}

						<div className="flex items-center gap-3 mx-10">
							{data?.singleUser?.information.facebook ? (
								<>
									<a
										href={data?.singleUser?.information.facebook}
										target="_blank"
									>
										<FaFacebookSquare size={30} className="text-[#0e8cf1]" />
									</a>
								</>
							) : (
								<button onClick={handleFacebookClick}>
									<FaFacebookSquare size={30} className="text-[#0e8cf1]" />
								</button>
							)}
							{data?.singleUser?.information.instagram ? (
								<>
									<a
										href={data?.singleUser?.information.instagram}
										target="_blank"
									>
										<FaInstagramSquare
											size={30}
											className="text-red opacity-50"
										/>
									</a>
								</>
							) : (
								<button onClick={handleInstagramClick}>
									{' '}
									<FaInstagramSquare
										size={30}
										className="text-red opacity-50"
									/>
								</button>
							)}
							{data?.singleUser?.information.linkDin ? (
								<>
									<a
										href={data?.singleUser?.information.linkDin}
										target="_blank"
									>
										{' '}
										<FaLinkedin size={30} className="text-[#0a66c2] " />
									</a>
								</>
							) : (
								<button onClick={handleLinkDinClick}>
									{' '}
									<FaLinkedin size={30} className="text-[#0a66c2] " />
								</button>
							)}
						</div>
					</div>
				</div>

				<hr className="border my-10 opacity-20" />

				<div className="grid grid-cols-9 gap-5 mx-20">
					<div className="col-span-4 bg-primary-color bg-opacity-10 h-[300px] rounded-md p-5">
						<div className="flex justify-between">
							<h5 className="text-xl uppercase font-semibold mb-5">
								information
							</h5>

							{user?.email !== email ? (
								<></>
							) : (
								<div className="mt-3">
									<button onClick={() => setShowModal(true)}>
										{' '}
										<HiMiniPencilSquare size={20} />
									</button>
								</div>
							)}
						</div>

						<div>
							<p>
								<span className="font-semibold">Email:</span>{' '}
								{data?.singleUser?.email}
							</p>
							<p>
								<span className="font-semibold">Followers:</span>{' '}
								{data?.singleUser?.followers?.length}
							</p>
							<p>
								<span className="font-semibold">Following:</span>{' '}
								{data?.singleUser?.following?.length}
							</p>
						</div>

						<div className="mt-6">
							<p className="font-bold mb-1">Personal Information</p>
							{data?.singleUser?.information?.university && (
								<div className="flex gap-2 items-center">
									<FaGraduationCap size={20} />
									<p>
										Studies at{' '}
										<span className="font-semibold opacity-80">
											{data?.singleUser?.information?.university}
										</span>
									</p>
								</div>
							)}
							{data?.singleUser?.information?.college && (
								<div className="flex gap-2 item-center">
									<FaSchool size={20} />
									<p>
										Went to{' '}
										<span className="font-semibold opacity-80">
											{data?.singleUser?.information?.college}
										</span>
									</p>
								</div>
							)}
							{data?.singleUser?.information?.school && (
								<div className="flex gap-2 item-center">
									<LuSchool size={20} />
									<p>
										Went to{' '}
										<span className="font-semibold opacity-80">
											{data?.singleUser?.information?.school}
										</span>
									</p>
								</div>
							)}
							{data?.singleUser?.information?.location && (
								<div className="flex gap-2 item-center">
									<GrLocation size={20} />
									<p>
										Lives in{' '}
										<span className="font-semibold opacity-80">
											{data?.singleUser?.information?.location}
										</span>
									</p>
								</div>
							)}
						</div>
					</div>

					<div className="col-span-5">
						{ownPosts?.length < 1 ? (
							<h1 className="text-3xl opacity-80 flex justify-center items-center">
								<HiMiniNoSymbol /> Post is not Avaiable{' '}
							</h1>
						) : (
							ownPosts &&
							ownPosts.map((post) => (
								<SinglePost key={post._id} post={post}></SinglePost>
							))
						)}
					</div>
				</div>
			</div>

			<EditProfileModal
				isVisible={showModal}
				onClose={() => setShowModal(false)}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="bg-white p-2 rounded">
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Username
							</label>
							<input
								{...register('name')}
								type="text"
								defaultValue={data?.singleUser?.name}
								name="name"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Bio
							</label>
							<textarea
								{...register('bio')}
								name="bio"
								defaultValue={data?.singleUser?.bio}
								rows={3}
								className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								University
							</label>
							<input
								{...register('university')}
								type="text"
								defaultValue={data?.singleUser?.information?.university}
								name="university"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								College
							</label>
							<input
								{...register('college')}
								type="text"
								defaultValue={data?.singleUser?.information?.college}
								name="college"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								School
							</label>
							<input
								{...register('school')}
								type="text"
								defaultValue={data?.singleUser?.information?.school}
								name="school"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Location
							</label>
							<input
								{...register('location')}
								type="text"
								defaultValue={data?.singleUser?.information?.location}
								name="location"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Gender
							</label>
							<select
								{...register('gender')}
								name="gender"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Facebook
							</label>
							<input
								{...register('facebook')}
								defaultValue={data?.singleUser?.information?.facebook}
								type="text"
								name="facebook"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Instagram
							</label>
							<input
								{...register('instagram')}
								defaultValue={data?.singleUser?.information?.instagram}
								type="text"
								name="instagram"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								linkDin
							</label>
							<input
								{...register('linkDin')}
								defaultValue={data?.singleUser?.information?.linkDin}
								type="text"
								name="linkDin"
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<button
							type="submit"
							className="px-4 py-2 text-white bg-primary-color rounded-md hover:bg-primary-color-dark focus:outline-none focus:ring"
						>
							Save Changes
						</button>
					</div>
				</form>
			</EditProfileModal>
		</>
	);
};

export default UserProfile;
