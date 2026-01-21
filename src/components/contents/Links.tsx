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
                        className="block flex justify-between rounded-xl border border-gray-200 p-4 transition hover:border-black"
                    >
                        <span className="font-bold">{linkdata.title}</span>
                        <span className="text-gray-400">
                            {linkdata.description}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );
};
