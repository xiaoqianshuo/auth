"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";

export default function DashboardPage() {
	const router = useRouter();
	const { data: session, isPending } = useSession();

	async function handleSignOut() {
		await signOut();
		router.push("/sign-in");
		router.refresh();
	}

	if (isPending) {
		return (
			<main className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16">
				<p className="text-sm text-slate-600">Loading session...</p>
			</main>
		);
	}

	return (
		<main className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16">
			<section className="w-full rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(2,6,23,0.28)]">
				<div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
					<div className="space-y-3">
						<p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
							Session
						</p>
						<h1 className="text-3xl font-semibold">
							{session?.user?.name ?? "Not signed in"}
						</h1>
						<p className="text-slate-300">
							{session?.user?.email ?? "Create an account or sign in to test auth."}
						</p>
					</div>

					<button
						type="button"
						onClick={handleSignOut}
						className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
					>
						Sign out
					</button>
				</div>
			</section>
		</main>
	);
}
