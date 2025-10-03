import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen">
            <header className="bg-white border-b">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <Link to="/" className="font-bold text-lg">User Management</Link>
                    <nav className="space-x-4 text-sm">
                        <Link to="/" className="hover:underline">Users</Link>
                        <a
                            className="hover:underline"
                            href="https://jsonplaceholder.typicode.com/users"
                            target="_blank"
                            rel="noreferrer"
                        >
                        </a>
                    </nav>
                </div>
            </header>
            <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        </div>
    );
}
