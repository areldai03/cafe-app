const Menu = () => {
    return (
        <>
            <div className="relative">
                <img src="menu.jpg" className="object-contain w-full brightness-50 bg-black/30 md:h-96" alt="Menu" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-serif text-5xl md:text-9xl">Menu</span>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="p-5 md:w-2/3">
                    <h2 className="border-y-2 border-amber-700 font-serif text-xl md:text-3xl">blended coffee</h2>
                    <div className="p-3">
                        <p className="text-xs md:text-base">スペシャルブレンド................................. ￥500</p>
                    </div>
                    
                    <div className="p-3">
                        <p className="text-xs md:text-base">アメリカンブレンド.......................... ￥500</p>
                    </div>

                    <div className="p-3">
                        <p className="text-xs md:text-base">ソフトブレンド................................. ￥500</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="p-5 md:w-2/3">
                    <h2 className="border-y-2 border-amber-700 font-serif text-xl md:text-3xl">straight coffee</h2>
                    <div className="p-3">
                        <p className="text-xs md:text-base">モカイルガチェフェ............................. ￥500</p>
                    </div>
                    
                    <div className="p-3">
                        <p className="text-xs md:text-base">サントゥアリオ.................................... ￥500</p>
                    </div>

                    <div className="p-3">
                        <p className="text-xs md:text-base">トミオブルボン.................................... ￥500</p>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Menu;
