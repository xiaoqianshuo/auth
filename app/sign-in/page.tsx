"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";

export default function SignInPage() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [pending, setPending] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError(null);
		setPending(true);

		const formData = new FormData(event.currentTarget);
		const response = await signIn.email({
			email: String(formData.get("email") ?? ""),
			password: String(formData.get("password") ?? ""),
		});

		setPending(false);

		if (response.error) {
			setError(response.error.message ?? "Sign in failed.");
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
						Better Auth
					</p>
					<h1 className="text-3xl font-semibold text-slate-950">Sign in</h1>
					<p className="text-sm text-slate-600">
						Use your email and password to open the dashboard.
					</p>
				</div>

				<form className="space-y-4" onSubmit={handleSubmit}>
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
						className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
					>
						{pending ? "Signing in..." : "Sign in"}
					</button>
				</form>

				<p className="text-sm text-slate-600">
					No account yet?{" "}
					<Link className="font-semibold text-emerald-700" href="/sign-up">
						Create one
					</Link>
				</p>
			</div>
		</main>
	);
}
