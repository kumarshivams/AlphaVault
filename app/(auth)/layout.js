const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.35),_transparent_25%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.22),_transparent_25%),linear-gradient(135deg,_#031b16,_#0f2e23_80%)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(134,239,172,0.14),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(253,224,71,0.08),_transparent_25%)]"></div>
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_30px)]"></div>
        <div className="relative flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle,_rgba(52,211,153,0.18),transparent_55%)]" />
          <div className="absolute right-10 top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-3xl" />
          <div className="absolute left-8 bottom-24 h-56 w-56 rounded-full border border-emerald-300/10 bg-emerald-300/5 blur-3xl" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
