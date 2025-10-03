import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers, updateUser, deleteUser, setSort } from "../store/usersSlice";
import InlineEdit from "./InlineEdit";

export default function UsersTable() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, status, search, sort, error } = useSelector((s) => s.users);

    useEffect(() => {
        if (status === "idle") dispatch(fetchUsers());
    }, [status, dispatch]);

    const users = useMemo(() => {
        const q = (search || "").toLowerCase();
        let list = items.filter(
            (u) => !q || (u.name || "").toLowerCase().includes(q) || (u.email || "").toLowerCase().includes(q)
        );
        const dir = sort?.dir === "desc" ? -1 : 1;
        const field = sort?.field || "name";
        return list.sort((a, b) => {
            const va = field === "company" ? (a.company?.name || "") : (a[field] || "");
            const vb = field === "company" ? (b.company?.name || "") : (b[field] || "");
            return va.toString().localeCompare(vb.toString()) * dir;
        });
    }, [items, search, sort]);

    if (status === "loading") return <div className="text-gray-500">Loading users…</div>;
    if (status === "failed") return <div className="text-red-600">Error: {error || "Failed to fetch users"}</div>;

    return (
        <div className="card overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th
                            className="w-[40%] cursor-pointer"
                            onClick={() =>
                                dispatch(
                                    setSort({
                                        field: "name",
                                        dir: sort.field === "name" && sort.dir === "asc" ? "desc" : "asc",
                                    })
                                )
                            }
                        >
                            Name {sort.field === "name" && (sort.dir === "asc" ? "▲" : "▼")}
                        </th>
                        <th
                            className="w-[30%] cursor-pointer"
                            onClick={() =>
                                dispatch(
                                    setSort({
                                        field: "email",
                                        dir: sort.field === "email" && sort.dir === "asc" ? "desc" : "asc",
                                    })
                                )
                            }
                        >
                            Email {sort.field === "email" && (sort.dir === "asc" ? "▲" : "▼")}
                        </th>
                        <th
                            className="w-[20%] cursor-pointer"
                            onClick={() =>
                                dispatch(
                                    setSort({
                                        field: "company",
                                        dir: sort.field === "company" && sort.dir === "asc" ? "desc" : "asc",
                                    })
                                )
                            }
                        >
                            Company {sort.field === "company" && (sort.dir === "asc" ? "▲" : "▼")}
                        </th>
                        <th className="text-right w-[10%]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id} className="hover:bg-blue-50">
                            <td
                                className="font-medium text-blue-600 cursor-pointer"
                                onClick={() => navigate(`/users/${u.id}`)}
                            >
                                {u.name || "(no name)"}{" "}
                                {u._local && (
                                    <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                                        local
                                    </span>
                                )}
                            </td>
                            <td>{u.email || "—"}</td>
                            <td>{u.company?.name || "—"}</td>
                            <td className="text-right">
                                <InlineEdit
                                    user={u}
                                    onSave={(updates) => dispatch(updateUser({ id: u.id, updates }))}
                                    onDelete={() => dispatch(deleteUser(u.id))}
                                />
                            </td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan={4} className="p-8 text-center text-gray-500">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
