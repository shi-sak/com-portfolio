import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";



export const ContactForm = () => {
    //form URL
    const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc0IEaQ3QGCuC12xTZ9u-q8gpSt_nxrouyp4WU6qryALrEbJg/formResponse";
    
    const ENTRY_ID_NAME = "entry.856718230";    // お名前
    const ENTRY_ID_EMAIL = "entry.1794014913";   // メールアドレス
    const ENTRY_ID_MESSAGE = "entry.1023692998"; // メッセージ本文


    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="w-full">
            {/* 隠しiframe */}
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
            />

            <AnimatePresence mode="wait">
                {isSubmitted ? (
                    // === 送信完了画面 ===
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-5 bg-gray-50 rounded-2xl border border-gray-100"
                    >
                        <p className="text-l font-bold mb-2">お問い合わせありがとうございます</p>
                        <p className="text-gray-600 text-sm">
                            内容を確認次第、ご連絡させていただきます。
                        </p>
                    </motion.div>
                ) : (
                    // === 入力フォーム ===
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        
                        action={GOOGLE_FORM_ACTION}
                        method="POST"
                        target="hidden_iframe"
                        onSubmit={() => setTimeout(() => setIsSubmitted(true), 100)}
                        className="flex flex-col gap-5 text-left"
                    >
                        {/* お名前 */}
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-sm pl-1">お名前</label>
                            <input
                                type="text"
                                name={ENTRY_ID_NAME}
                                required
                                placeholder="見込む ちゃん"
                                className="bg-gray-50 border-2 border-gray-200 focus:border-black rounded-xl p-3 outline-none transition-colors"
                            />
                        </div>

                        {/* メールアドレス */}
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-sm pl-1">メールアドレス</label>
                            <input
                                type="email"
                                name={ENTRY_ID_EMAIL}
                                required
                                placeholder="email@example.com"
                                className="bg-gray-50 border-2 border-gray-200 focus:border-black rounded-xl p-3 outline-none transition-colors"
                            />
                        </div>

                        {/* メッセージ */}
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-sm pl-1">メッセージ</label>
                            <textarea
                                name={ENTRY_ID_MESSAGE}
                                rows={5}
                                required
                                placeholder="お問い合わせ内容をご記入ください"
                                className="bg-gray-50 border-2 border-gray-200 focus:border-black rounded-xl p-3 outline-none transition-colors resize-none"
                            />
                        </div>

                        {/* 送信ボタン */}
                        <motion.button
                            type="submit"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-black text-white font-bold py-3 mt-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
                        >
                            送信する
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};