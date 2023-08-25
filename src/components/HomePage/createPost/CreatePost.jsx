// "use client";
// import Image from "next/image";
// import "./style.css";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useState } from "react";

// const CreatePost = () => {

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {

//     console.log(data);
//     console.log(data.text);
//     console.log(data.image.length);

//     const image = data.image[0];
//     const formData = new FormData();
//     formData.append("image", image);
//     const url = `https://api.imgbb.com/1/upload?key=f3218173624c8aebe56d3c415677e482`;
//     const { text } = data;

//     if (data.image.length == 0) {
//       fetch("http://localhost:3000/api/posts", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({
//           author: {
//             email:"",
//             name: "",
//             profile_picture: ""
//           },
//           caption: text,
//           postImage: '',
//           comments: [
//             {
//             author: {
//               name: "",
//               profile_picture: ""
//             },
//             }
//           ]
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           reset()
//           // if (data.insertedId) {
//           //   reset();
//           // }
//         });
//     }

//     if (data.image.length == 1) {

//       axios.post(url, formData)
//         .then(imageData => {

//           if (imageData.status === 200) {

//             console.log(imageData.data.data.url);
//             fetch("http://localhost:3000/api/posts", {
//               method: "POST",
//               headers: {
//                 "content-type": "application/json",
//               },
//               body: JSON.stringify({
//                 author: {
//                   email:"",
//                   name: "",
//                   profile_picture: ""
//                 },
//                 caption: text || "",
//                 postImage: imageData.data.data.url,
//                 comments: [
//                   {
//                   author: {
//                     name: "",
//                     profile_picture: ""
//                   },
//                   }
//                 ]
//               }),
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 reset()
//                 // console.log(data);
//                 // if (data.insertedId) {
//                 //   reset();
//                 // }
//               });
//           }
//         })
//     }
//   };

//   return (
//     <>
//       <div className="mt-10">
//         <div className="flex gap-x-5 bg-[#F9F5F6] px-10 py-5">
//           <Image
//             src="https://i.ibb.co/p4cD0Gs/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro.jpg"
//             className="w-10 h-10 rounded-[50%] object-fit"
//             alt="img"
//             width={30}
//             height={30}
//           />

//           <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <textarea
//                 className="wonderful-textarea"
//                 rows="4"
//                 cols="100"
//                 name="text"
//                 placeholder="Enter your text here..."
//                 {...register("text")}
//               ></textarea>

//               <div className="flex justify-center gap-x-5 my-8">
//                 <div className="flex gap-x-2 items-center">
//                   <div className="image-upload-container">
//                     <input type="file" id="image-input" accept="image/*" {...register("image")} />
//                     <label htmlFor="image-input" className="upload-button">
//                       Upload Image
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="btn btn-primary block rounded-none w-full text-white"
//                 >
//                   POST
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreatePost;
