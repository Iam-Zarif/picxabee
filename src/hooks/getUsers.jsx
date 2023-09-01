const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users",{
          cache:"no-cache",
      });
  
      if (!res.ok) {
        throw new Error("failed to fetch");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default getUsers;