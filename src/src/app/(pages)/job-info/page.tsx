"use client"
import { motion } from "framer-motion"

const Job = () => {
    return (
        <>
        <div className="">
            <motion.h1
                className="figure2 flex justify-center text-xl mt-3 md:text-5xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: -10 }}
                transition={{ duration: 2 }}>
                異次元の求人募集
            </motion.h1>

            <motion.div
                className="figure2 m-5 grid grid-cols-1 gap-2 content-center md:grid-cols-3 text-base md:text-xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}>
                    <div className="max-w-sm m-3 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">仕事内容</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">カウンターでの注文受け付け
                        <br />料理や飲み物の提供
                        <br />お客様への接客とサービスの提供
                        <br />レジ業務
                        <br />カフェ内の清掃および整理整頓</p>
                    </div>
                    <div className="max-w-sm m-3 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">応募資格</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">高校生以上
                        <br />接客業務に興味がある方
                        <br />チームワークを大切にできる方
                        <br />シフト勤務が可能な方</p>
                    </div>
                    <div className="max-w-sm m-3 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">勤務条件</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">勤務地: [カフェの所在地]
                        <br />勤務時間: 週2日以上、1日4時間以上の勤務が可能な方
                        <br />待遇: 時給1000円（経験や能力により優遇あり）、交通費支給、社員割引あり</p>
                    </div>
                    <div className="max-w-sm m-3 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">応募方法</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">履歴書を添えて、下記のメールアドレスまでご応募ください
                        <br />メール件名に「カフェ店員 応募」と記載してください</p>
                    </div>



                
            </motion.div>
            
        </div>
        </>

    )
}

export default Job