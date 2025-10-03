export async function Logout({ role }: { role: "admin" | "member" }) {
    const res = await fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
    });

    if (!res.ok) throw new Error("Logout failed");
    return res.json();
}
