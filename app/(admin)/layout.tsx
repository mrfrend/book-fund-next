export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className="flex justify-center items-center">
            <div className="max-w-[1076px] p-3 flex-1 bg-white rounded-lg mt-[75px] h-full max-h-[720px]">
            {children}
            </div>
            
        </main>
            
    )
}