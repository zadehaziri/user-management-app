import { useEffect, useState } from "react";

export default function InlineEdit({ user, onSave, onDelete }) {
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", company: "" });
    const [err, setErr] = useState("");

    // keep form in sync when selected user changes
    useEffect(() => {
        setForm({
            name: user?.name || "",
            email: user?.email || "",
            company: user?.company?.name || "",
        });
        setErr("");
    }, [user]);

    const handleSave = () => {
        if (!form.name.trim() || !form.email.trim()) {
            setErr("Name and Email are required");
            return;
        }
        const emailOk = /\S+@\S+\.\S+/.test(form.email.trim());
        if (!emailOk) {
            setErr("Please enter a valid email");
            return;
        }
        onSave({
            name: form.name.trim(),
            email: form.email.trim(),
            company: { name: form.company.trim() },
        });
        setEditing(false);
    };

    if (!editing) {
        return (
            <div className="flex gap-2 justify-end">
                <button className="btn btn-secondary" onClick={() => setEditing(true)}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={onDelete}>
                    Delete
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-end">
            <input
                className="input flex-1 min-w-[120px]"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Name *"
            />
            <input
                className="input flex-1 min-w-[160px]"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email *"
            />
            <input
                className="input flex-1 min-w-[140px]"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Company"
            />
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
            {err && <div className="text-red-600 text-sm sm:ml-2">{err}</div>}
        </div>
    );
}
