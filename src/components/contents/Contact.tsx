import { ContactForm } from "../ui/ContactForm";

import { X_LINK } from "../../data/LinkData";

export const Contact = () => {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-8 text-center leading-relaxed text-gray-700">
        <p>
          ご依頼・ご相談は
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
