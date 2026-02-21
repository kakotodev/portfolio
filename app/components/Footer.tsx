export default function Footer() {
    return (
        <footer className="w-full flex justify-center items-center py-8 border-t border-white/10 bg-[#0f0f11] mt-20">
            <p className="flex items-center gap-1.5 text-gray-400 font-light text-sm lg:text-base">
                © {new Date().getFullYear()} - Conçu et développé par <span className="font-semibold gradient-1 ml-1 tracking-wide">Lam</span>
            </p>
        </footer>
    )
}