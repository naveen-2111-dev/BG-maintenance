//as member

export async function POST(request: Request) {
    const { email, password } = await request.json();

    if (email === process.env.NEXT_MEMBER_EMAIL && password === process.env.NEXT_MEMBER_PASSWORD) {
        return new Response("Login successful", { status: 200 });
    } else {
        return new Response("Invalid credentials", { status: 401 });
    }
}