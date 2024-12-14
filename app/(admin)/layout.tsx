export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className="flex justify-center items-center px-4">
            <div className="max-w-[1076px] p-3 pb-5 flex-1 bg-white rounded-lg mt-[75px] h-full max-h-[820px]">
            {children}
            </div>
            
        </main>
            
    )
}