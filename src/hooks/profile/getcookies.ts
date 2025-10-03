export async function Cookie({ role }: { role: "admin" | "member" }) {
    const res = await fetch("/api/cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error("cookie fetch failed");
    return data.data.value;

}
