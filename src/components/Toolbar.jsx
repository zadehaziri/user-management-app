import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSort } from "../store/usersSlice";
import AddUserModal from "./AddUserModal";

export default function Toolbar() {
    const dispatch = useDispatch();
    const search = useSelector((s) => s.users.search);
    const sort = useSelector((s) => s.users.sort);

    return (
        <div className="flex flex-wrap items-end gap-4 mb-6">
            {/* Search */}
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Search</label>
                <input
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    placeholder="Search by name or email"
                    className="input w-60"
                />
            </div>

            {/* Sort */}
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Sort by</label>
                <div className="flex gap-2">
                    <select
                        value={sort.field}
                        onChange={(e) =>
                            dispatch(setSort({ field: e.target.value, dir: sort.dir }))
                        }
                        className="input w-40"
                    >
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="company">Company</option>
                    </select>
                    <button
                        type="button"
                        className="px-2 py-1 text-sm rounded-md border border-gray-300 bg-white hover:bg-gray-100 whitespace-nowrap flex items-center gap-1"
                        onClick={() =>
                            dispatch(
                                setSort({
                                    field: sort.field,
                                    dir: sort.dir === "asc" ? "desc" : "asc",
                                })
                            )
                        }
                    >
                        {sort.dir === "asc" ? "▲ A–Z" : "▼ Z–A"}
                    </button>
                </div>
            </div>

            {/* Add User Modal */}
            <AddUserModal />
        </div>
    );
}
