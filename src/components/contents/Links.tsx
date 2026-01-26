import { LINK_DATA } from "../../data/LinkData";

import { useSecret } from "../../contexts/SecretContext";

export const Links = () => {
    const { isSecretMode } = useSecret();
    const displayLinks = LINK_DATA.filter((link) => {
        //シークレットモード
        if (link.isSecret) {
            return isSecretMode;
        }
        // 普通のリンクは常に通す
        return true;
    });

    return (
        <ul className="space-y-2">
            {displayLinks.map((linkdata) => (
                <li key={linkdata.id}>
                    <a
                        href={linkdata.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block flex justify-between rounded-xl border p-4 transition ${
                            linkdata.isSecret
                                ? "border-gray-600 bg-gray-700 text-white hover:border-gray-500"
                                : "border-gray-200 bg-white text-black hover:border-black"
                        } `}
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
