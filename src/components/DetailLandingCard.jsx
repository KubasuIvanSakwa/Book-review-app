
function DetailLandingCard() {

    return (
        <section className="w-[60%] flex flex-col items-center gap-2 p-1">
            <section className="overflow-hidden bg-[#11141A]/90 w-[96%] h-[15rem] flex flex-col rounded-xl items-center relative">
                <p className="text-[3rem] uppercase absolute z-20 top-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#434A56] to-violet-200">Market Place</p>
                <div className="bg-[#585c63a9] w-[99%] h-[6rem] absolute bottom-0 rounded-tl-xl rounded-tr-xl flex gap-2 pt-[1rem] items-center justify-center">
                    <div className="p-1 border-t border-l border-r border-[#1D2126]/80 w-[10rem] h-full rounded-t-xl">
                        <div className="w-[0.9rem] h-[0.9rem] rounded-full bg-[#9B9999]/90 opacity-50 flex justify-center items-center text-white/50 ">+</div>
                    </div>
                    <div className="border-t border-l border-r border-[#1D2126]/80 border-b-none w-[10rem] h-full rounded-t-xl p-1">
                        <div className="w-[0.9rem] h-[0.9rem] rounded-full opacity-50 bg-[#9B9999] flex justify-center items-center text-white/50 ">+</div>
                    </div>
                    <div className="border-t border-l border-r border-[#1D2126]/80 border-b-none w-[10rem] h-full rounded-t-xl p-1">
                        <div className="w-[0.9rem] h-[0.9rem] rounded-full opacity-50 bg-[#9B9999] flex justify-center items-center text-white/50 ">+</div>
                    </div>
                </div>
            </section>
            <section className="bg-[#11141A]/90 w-[96%] h-[15rem] rounded-xl"></section>
            <section className="bg-[#11141A]/90 w-[96%] h-[15rem] rounded-xl"></section>
        </section>
    )
}

export default DetailLandingCard