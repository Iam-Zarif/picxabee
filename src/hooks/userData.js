export const useUsers = async () => {
    try {
        const res = await fetch("/api/users");
        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        if (!Array.isArray(data)) {
            throw new Error("Data is not an array");
        }
        return data;
    } catch (error) {
        console.error(error.message);
        return []; // Return an empty array or handle the error as needed
    }
};