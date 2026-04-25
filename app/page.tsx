export default function Home() {
	return (
		<main className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
			<section className="grid w-full gap-10 rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur md:grid-cols-[1.4fr_0.9fr] md:p-12">
				<div className="space-y-8">
					<div className="space-y-4">
						<p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-700">
							Cloudflare Workers
						</p>
						<h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-6xl">
							Next.js, Prisma 7, and Better Auth are wired together.
						</h1>
						<p className="max-w-xl text-base leading-7 text-slate-600">
							This starter now includes the Prisma schema, Better Auth route
							handler, and ready-to-test sign-up/sign-in flow.
						</p>
					</div>

					<div className="flex flex-wrap gap-3">
						<a
							href="/sign-up"
							className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
						>
							Create account
						</a>
						<a
							href="/sign-in"
							className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-500 hover:text-emerald-700"
						>
							Sign in
						</a>
						<a
							href="/dashboard"
							className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-500 hover:text-emerald-700"
						>
							Open dashboard
						</a>
					</div>
				</div>

				<div className="rounded-[1.5rem] bg-slate-950 p-6 text-sm text-slate-200">
					<p className="font-medium uppercase tracking-[0.2em] text-emerald-300">
						Before running
					</p>
					<ul className="mt-4 space-y-3 leading-6">
						<li>Set `BETTER_AUTH_SECRET` in `.env`.</li>
						<li>Run `pnpm db:generate` once.</li>
						<li>Run `pnpm db:migrate --name init-auth`.</li>
						<li>Start the app with `pnpm dev`.</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
