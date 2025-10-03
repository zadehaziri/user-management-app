import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

export default function UserDetails() {
    const { id } = useParams();
    const user = useSelector((s) => s.users.items.find((u) => String(u.id) === String(id)));
    const navigate = useNavigate();

    if (!user) {
        return (
            <Layout>
                <div className="p-6">
                    <div className="card">User not found</div>
                </div>
            </Layout>
        );
    }

    const address = user.address
        ? `${user.address.street || ""} ${user.address.suite || ""}, ${user.address.city || ""} ${user.address.zipcode || ""}`.trim()
        : "N/A";

    return (
        <Layout>
            <div className="p-6">
                <div className="card max-w-lg">
                    <button onClick={() => navigate(-1)} className="mb-4 text-sm text-blue-600 hover:underline">
                        ← Back
                    </button>
                    <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                    <div className="space-y-1 text-gray-700">
                        <p>
                            <span className="font-medium">Email:</span> {user.email || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium">Company:</span> {user.company?.name || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium">Phone:</span> {user.phone || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium">Website:</span> {user.website || "N/A"}
                        </p>
                        <p>
                            <span className="font-medium">Address:</span> {address}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
