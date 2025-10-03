import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Toolbar from "../components/Toolbar";
import UsersTable from "../components/UsersTable";

export default function UsersPage() {
    const total = useSelector((s) => s.users.items.length);

    return (
        <Layout>
            <div className="p-6">
                {/* Page header row */}
                <div className="mb-8 flex items-center justify-between">
                    {/* Centered title + controls */}
                    <div className="flex-1 flex flex-col items-center">
                        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight flex items-center gap-2">
                            👥 User Directory
                            <span className="text-sm font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                {total} users
                            </span>
                        </h1>
                        <p className="text-gray-500 mt-2 mb-10 text-center">
                            Manage your team members
                        </p>

                        <div className="w-full max-w-2xl">
                            <Toolbar />
                        </div>
                    </div>
                </div>
                <div className="card overflow-x-auto mt-10">
                    <UsersTable />
                </div>
            </div>
        </Layout>
    );
}
