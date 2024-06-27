import upload from "../../public/upload.svg" 
import code from "../../public/code-ex.png" 

function DetailLandingCard() {

    return (
        <section className="w-[60%] flex flex-col items-center gap-2 p-1">
            <section className="overflow-hidden relative bg-[#11141A]/90 w-[96%] h-[15rem] rounded-xl flex justify-center">
                <p className="text-[3rem] uppercase absolute z-20 top-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#434d56] to-white/50">upload</p>
                <div className="border-l border-t border-r border-dotted  w-[99%] h-[6rem] border-white/10 absolute bottom-0 rounded-tl-xl rounded-tr-xl flex gap-2 pt-[1rem] items-center justify-center">
                    <img src={upload} className="w-[13%] opacity-20"/>
                </div>
            </section>

            <section className="overflow-hidden bg-[#11141A]/90 w-[96%] h-[15rem] flex flex-col rounded-xl items-center relative">
                <p className="text-[3rem] uppercase absolute z-20 top-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#434A56] to-violet-200">Market Place</p>
                <div className="bg-gradient-to-l from-[#434A56] to-violet-200/20 w-[99%] h-[6rem] absolute bottom-0 rounded-tl-xl rounded-tr-xl flex gap-2 pt-[1rem] items-center justify-center">
                    <div className="p-1 border-t border-l border-r border-[#1D2126]/40 w-[10rem] h-full rounded-t-xl">
                        <div className="w-[0.9rem] h-[0.9rem] rounded-full bg-[#9B9999]/90 opacity-20 flex justify-center items-center text-white/50 ">+</div>
                    </div>
                    <div className="border-t border-l border-r border-[#1D2126]/40 border-b-none w-[10rem] h-full rounded-t-xl p-1">
                        <div className="w-[0.9rem] h-[0.9rem] rounded-full opacity-20 bg-[#9B9999] flex justify-center items-center text-white/50 ">+</div>
                    </div>
                    <div className="border-t border-l border-r border-[#1D2126]/40 border-b-none w-[10rem] h-full rounded-t-xl p-1">
                        <div className="w-[0.9rem] h-[0.9rem] rounded-full opacity-20 bg-[#9B9999] flex justify-center items-center text-white/50 ">+</div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden relative bg-[#11141A]/90 w-[96%] h-[15rem] rounded-xl flex justify-center">
                <p className="text-[3rem] uppercase absolute z-20 top-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#434d56] to-white/50">SNIPPETS</p>
                <div className="overflow-hidden border-l border-t border-r border-dotted  w-[99%] h-[6rem] border-white/10 absolute bottom-0 rounded-tl-xl rounded-tr-xl flex items-start">
                    <img src={code} className="opacity-40 absolute w-full top-[-2rem]"/>
                </div>
            </section>

        </section>
    )
}

export default DetailLandingCard