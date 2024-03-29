const Main = ()=>{
    return(
        <main>
                <div className="flex justify-center mt-20">
                    <img src="pour-cofee.jpg" className="object-contain w-48 md:w-auto"/>
                    <div className="flex flex-col justify-center p-2 md:p-10" >
                        <h1 className="font-serif text-base md:text-2xl">Del Cafe</h1>
                        <br />
                        <p className="text-xs md:text-lg">心地よい空間で、最高のコーヒーを楽しもう。Delcafeがオープンしました。<br />
                        全席ソファーのゆったりとしたレトロモダンな空間で厳選した珈琲を堪能してみてはいかがでしょうか？<br />
                        ぜひお待ちしております。</p>
                    </div>
                </div>

                <div className="flex justify-center mt-20">
                    <div className="flex flex-col justify-center p-2 md:p-10" >
                        <h1 className="font-serif text-base md:text-2xl">Pour-over Coffee </h1>
                        <br />
                        <p className="text-xs md:text-lg">使用している豆は全て、『スペシャルティコーヒー』と認められた安心・安全・高品質なコーヒー豆を使用。<br />
                        Delcafeのコーヒー豆は、世界中から厳選され、熟練の目と独自の技術で焙煎されます。<br />
                        豊かな風味と深い香りが、贅沢なひと時を演出します。ぜひ、その豊かな味わいをお楽しみください。</p>
                    </div>
                    <img src="coffee-beans.jpg" className="object-contain w-48 md:w-auto"/>
                </div>

                <div className="flex justify-center mt-20">
                    <img src="coffee-master.jpg" className="object-contain w-48 md:w-auto"/>
                    <div className="flex flex-col justify-center p-2 md:p-10" >
                        <h1 className="font-serif text-base md:text-2xl">Introducing varistor</h1>
                        <br />
                        <p className="text-xs md:text-lg">世界のコーヒー本場から厳選されたマスターバリスタが、Delcafeにやってきました。<br />
                        彼の技術と情熱で、最高のコーヒーエクスペリエンスをお届けします。<br />
                        ぜひご堪能ください。</p>
                    </div>
                </div>
        </main>
    )
}
export default Main