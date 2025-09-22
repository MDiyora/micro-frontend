export default function Header() {
    return (
        <div className="p-10 bg-blue-900 text-white text-2xl w-full flex justify-between">
            <h1>SATashkent ERP</h1>
            <nav className="flex gap-10">
                <a className="underline text-blue-400" href="/">
                    Home
                </a>
                <a className="underline text-blue-400" href="/hr">
                    HR
                </a>
                <a className="underline text-blue-400" href="/finance">
                    Finance
                </a>
            </nav>
        </div>
    );
}
