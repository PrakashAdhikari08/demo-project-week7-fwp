import { useState, useDeferredValue } from "react";

import "./styles.css";

const ListUsers = ({ name, id }) => {
    let now = performance.now();
    while (performance.now() - now < 40) {
        // This loop is intentially here just to drag the component
        // down in a hard running loop.  It could represent something
        // like a complex calculation involving drawing a city shape
        // or something else compute intensive. It's mean to represent
        // work that can not be easily optimized or removed.
    }

    return <p key={id}>{name}</p>;
};

export default function App() {
    const users = [
        {
            id: 1,
            name: "Jane Doe"
        },
        {
            id: 2,
            name: "John Doe"
        },
        {
            id: 3,
            name: "Hoshang Merchant"
        },
        {
            id: 4,
            name: "Daemon Targaryen"
        },
        {
            id: 5,
            name: "Alicent Hightower"
        }
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const deferredSearch = useDeferredValue(searchTerm);

    return (
        <>
            <blockquote>
                This demo is using the `useDeferredValue` hook under the hood
            </blockquote>
            <h1>List of users</h1>
            <input
                type="search"
                placeholder="Search users"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <h2>Search term: {deferredSearch}</h2>

            {users
                .filter(({ name }) => {
                    return (
                        deferredSearch.length === 0 ||
                        name.toLowerCase().includes(deferredSearch.toLowerCase())
                    );
                })
                .map((user) => (
                    <ListUsers key={user.id} name={user.name} />
                ))}
        </>
    );
}
