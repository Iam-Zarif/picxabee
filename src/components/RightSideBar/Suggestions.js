
import Image from "next/image";
import nishat from "/public/nishat.PNG";
import jahid from "/public/jahid.PNG";
import fatin from "/public/fatin.PNG";
import rezon from "/public/rezwan.PNG";
import tuhin from "/public/Tuhin.PNG";
const Suggestions = () => {

    const Suggestions1 = [
        { dp: nishat, username: "Nishat Tasnim", role: "Team Leader" },
        { dp: jahid, username: "Jahid Howladar", role: "Git Specialist" },
        { dp: fatin, username: "M. F. Zarif", role: "Jira expert" },
        { dp: rezon, username: "R. F. Rezon", role: "Designer" },
        { dp: tuhin, username: "Tuhin Kanti Pal", role: "Next.js Enthusiast" },
    ]
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-700 font-bold">See All</button>
            </div>

            {Suggestions1.map((profile, idx) => (
                <div
                    key={idx}
                    className="flex items-center justify-between mt-3"
                >
                    <Image className="w-10 h-10 rounded-full border p-[2px]" src={profile.dp} alt="" />

                    <div className="flex-1 ml-4 ">
                        <h2 className="font-semibold text-sm">{profile.username}</h2>
                        <h3 className="text-xs text-gray-400">{profile.role}</h3>
                    </div>
                    <button className="text-red-400 text-sm">Follow</button>
                </div>
            ))}
        </div>
    );
};

export default Suggestions;