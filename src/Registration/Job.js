import React, { useState } from "react";

const Job = () => {
    const [search, setSearch] = useState("");
    const [selectedRole, setSelectedRole] = useState(null);
    const roles = [
        {
            id: 1,
            role: " web Developer",
        },
        {
            id: 2,
            role: " APP Developer",
        },
        {
            id: 3,
            role: "Ui Designer",
        },
        {
            id: 4,
            role: "ML Expert",
        },
    ];

    const selectOption = (role) => {
        setSelectedRole(role);
        setSearch(role.role);
    };
    return (
        <>
            <div className="jobs">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setSelectedRole(null);
                    }}
                />
            </div>
            {roles
                .filter((role) => {
                    return (
                        search &&
                        role.role.toLowerCase().includes(search.toLowerCase())
                    );
                })
                .map((role) => (
                    <li key={role.id} onClick={selectOption}>
                        {role.role}
                    </li>
                ))}
            {selectedRole && <p>{selectedRole.role}</p>}
        </>
    );
};

export default Job;
