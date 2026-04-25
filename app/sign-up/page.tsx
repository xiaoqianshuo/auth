"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signUp } from "@/lib/auth-client";

export default function SignUpPage() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [pending, setPending] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError(null);
		setPending(true);

		const formData = new FormData(event.currentTarget);
		const response = await signUp.email({
			name: String(formData.get("name") ?? ""),
			email: String(formData.get("email") ?? ""),
			password: String(formData.get("password") ?? ""),
		});

		setPending(false);

		if (response.error) {
			setError(response.error.message ?? "Sign up failed.");
			return;
		}

		router.push("/dashboard");
		router.refresh();
	}

	return (
		<main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-16">
			<div className="space-y-8 rounded-3xl border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
				<div className="space-y-2">
					<p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">
						Prisma + Better Auth
					</p>
					<h1 className="text-3xl font-semibold text-slate-950">Create account</h1>
					<p className="text-sm text-slate-600">
						Set up the first local user against your PostgreSQL database.
					</p>
				</div>

				<form className="space-y-4" onSubmit={handleSubmit}>
					<input
						required
						name="name"
						type="text"
						placeholder="Full name"
						className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:bg-white"
					/>
					<input
						required
						name="email"
						type="email"
						placeholder="Email"
						className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:bg-white"
					/>
					<input
						required
						name="password"
						type="password"
						placeholder="Password"
						minLength={8}
						className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-500 focus:bg-white"
					/>

					{error ? <p className="text-sm text-rose-600">{error}</p> : null}

					<button
						type="submit"
						disabled={pending}
						className="w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
					>
						{pending ? "Creating..." : "Create account"}
					</button>
				</form>

				<p className="text-sm text-slate-600">
					Already signed up?{" "}
					<Link className="font-semibold text-emerald-700" href="/sign-in">
						Go to sign in
					</Link>
				</p>
			</div>
		</main>
	);
}
