import { X_LINK } from "../../data/linkData";

export const Contact = () => {
    return (
        <div className="space-y-4 text-center">
            <p>
                お問い合わせは
                {X_LINK}
                のDM、<br/>
                もしくは以下のフォームよりお願いいたします。
            </p>
        </div>
    );
};