import { ContactForm } from "../ui/ContactForm";

import { X_LINK } from "../../data/LinkData";

export const Contact = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8 text-gray-700 leading-relaxed">
                <p>
                    ご依頼・ご相談は
                    <span className="font-bold mx-1">{X_LINK}</span>
                    のDM、<br />
                    もしくは以下のフォームよりお願いいたします。
                </p>
            </div>

            {/* === コンタクトフォーム === */}
            <ContactForm />
        </div>
    );
};