import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    return data.map((u) => ({ ...u, id: String(u.id) }));
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        items: [],
        status: "idle",
        error: null,
        search: "",
        sort: { field: "name", dir: "asc" },
    },
    reducers: {
        setSearch(state, action) { state.search = action.payload; },
        setSort(state, action) { state.sort = action.payload; },
        addUser: {
            reducer(state, action) { state.items.unshift(action.payload); },
            prepare(user) {
                return {
                    payload: {
                        id: nanoid(),
                        name: user.name,
                        email: user.email,
                        company: { name: user.company || "" },
                        phone: "",
                        website: "",
                        address: undefined,
                        _local: true,
                        createdAt: Date.now(),
                    },
                };
            },
        },
        updateUser(state, action) {
            const { id, updates } = action.payload;
            const idx = state.items.findIndex((u) => String(u.id) === String(id));
            if (idx !== -1) {
                const prev = state.items[idx];
                // normalize company shape
                const company =
                    updates.company && typeof updates.company === "object"
                        ? { name: updates.company.name || "" }
                        : prev.company || { name: "" };

                // create a new object to ensure change detection
                state.items[idx] = {
                    ...prev,
                    ...updates,
                    company,
                };
            }
        },
        deleteUser(state, action) {
            const id = action.payload;
            state.items = state.items.filter((u) => String(u.id) !== String(id));
        },
    },
    extraReducers: (b) => {
        b.addCase(fetchUsers.pending, (s) => { s.status = "loading"; s.error = null; });
        b.addCase(fetchUsers.fulfilled, (s, a) => {
            s.status = "succeeded";
            const locals = s.items.filter((u) => u._local);
            const fetched = a.payload.filter((u) => !locals.some((l) => l.id === u.id));
            s.items = [...locals, ...fetched];
        });
        b.addCase(fetchUsers.rejected, (s, a) => { s.status = "failed"; s.error = a.error?.message || "Unknown error"; });
    },
});

export const { setSearch, setSort, addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
