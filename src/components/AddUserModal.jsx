import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/usersSlice";

export default function AddUserModal() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", company: "" });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email) {
            setError("Name & Email are required");
            return;
        }
        const emailOk = /\S+@\S+\.\S+/.test(form.email);
        if (!emailOk) {
            setError("Please enter a valid email");
            return;
        }
        dispatch(addUser(form));
        setForm({ name: "", email: "", company: "" });
        setError("");
        setOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="btn btn-primary"
            >
                + Add User
            </button>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                className="input"
                                placeholder="Name *"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                            <input
                                className="input"
                                placeholder="Email *"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                            <input
                                className="input"
                                placeholder="Company"
                                value={form.company}
                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                            />
                            {error && <div className="text-red-600 text-sm">{error}</div>}
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="btn btn-secondary"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
