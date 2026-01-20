import { LINK_DATA } from "../../data/LinkData";

export const Links = () => {
    return (
        <ul className="space-y-2">
            {LINK_DATA.map((linkdata) => (
                <li key={linkdata.id}>
                    <a
                        href={linkdata.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 border border-gray-200 rounded-xl hover:border-black transition flex justify-between"
                    >
                        <span className="font-bold">{linkdata.title}</span>
                        <span className="text-gray-400">{linkdata.description}</span>
                    </a>
                </li>
            ))}
        </ul>
    );

};