import { ContactForm } from "../ui/ContactForm";

import { X_LINK, SKEB_LINK } from "../../data/LinkData";

export const Contact = () => {
    return (
        <div className="mx-auto w-full max-w-md">
            <div className="m-4 text-center leading-relaxed text-gray-700">
                <p>
                    簡単な依頼でしたら
                    <span className="mx-1 font-bold">{SKEB_LINK}</span>
                    を推奨しております。
                </p>
                <p>
                    その他ご依頼・ご相談は
                    <span className="mx-1 font-bold">{X_LINK}</span>
                    のDM、
                    <br />
                    もしくは以下のフォームよりお願いいたします。
                </p>
            </div>

            {/* === コンタクトフォーム === */}
            <ContactForm />
        </div>
    );
};
