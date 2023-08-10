import Post from "./Post"

const Posts = () => {
    const posts = [
        {
            id: "123",
            userName: "Curl Urban",
            userImg: "https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Fwinteriscoming.net%2Fwp-content%2Fuploads%2Fgetty-images%2F2022%2F06%2F1384660635.jpeg",
            img: "https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Fwinteriscoming.net%2Fwp-content%2Fuploads%2Fgetty-images%2F2022%2F06%2F1384660635.jpeg",
            caption: "Hi, I am curl Urban. From Bad Boys",
        },
        {
            id: "456",
            userName: "Aaron Paul",
            userImg: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F03%2Faaron-paul.jpg&q=60",
            img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F03%2Faaron-paul.jpg&q=60",
            caption: "Hi, I am aaron. From Braking Bad",
        },
    ]
  return (
    <div>
        {
            posts.map(post=> (
                <Post 
                key={post.id}
                id={post.id}
                username={post.userName}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}

                />

            ))
        }
    </div>
  )
}

export default Posts