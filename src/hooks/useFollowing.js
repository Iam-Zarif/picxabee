export const useFollowings = async(email) => {
    try {
        
        const res = await fetch(`http://localhost:3000/api/users/follow`,{
            cache:"no-cache",
            body:{email}
        })
        if (!res.ok) {
            throw new Error(`Failed to fetch`)
        }
        return res.json();
    } catch (error) {
        console.log(error.message , error.name);
    }
} 