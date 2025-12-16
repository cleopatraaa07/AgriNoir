import React, { useState } from 'react';
import { ScreenName } from '../types';

interface AuthProps {
  initialView: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

export const Auth: React.FC<AuthProps> = ({ initialView, onNavigate }) => {
  const [view, setView] = useState<ScreenName>(initialView);

  // Sign Up View
  if (view === ScreenName.SIGNUP) {
    return (
      <div className="bg-background-dark min-h-screen flex flex-col font-display antialiased overflow-x-hidden selection:bg-primary selection:text-background-dark text-white">
        <div className="h-5 w-full bg-transparent"></div>
        <main className="flex-1 flex flex-col items-center justify-center w-full px-6 pb-6">
          <div className="w-full max-w-[480px] flex flex-col items-center mb-8">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
              <div className="relative bg-surface-dark border border-surface-border p-4 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-primary text-4xl">eco</span>
              </div>
            </div>
            <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight text-center">Grow with Us</h1>
            <p className="text-text-secondary text-base font-medium leading-normal pt-2 text-center max-w-[280px]">
              Precision farming at your fingertips. Join AgriNoir today.
            </p>
          </div>

          <div className="w-full max-w-[480px] flex flex-col gap-5">
            {[
              { label: 'Full Name', type: 'text', placeholder: 'Enter your full name', icon: 'person' },
              { label: 'Email Address', type: 'email', placeholder: 'petani@example.com', icon: 'mail' },
              { label: 'Password', type: 'password', placeholder: 'Create a password', icon: 'visibility_off', isAction: true },
              { label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password', icon: 'visibility_off', isAction: true }
            ].map((field, idx) => (
              <div key={idx} className="flex flex-col gap-2 group/input">
                <label className="text-white text-sm font-medium ml-4 group-focus-within/input:text-primary transition-colors">{field.label}</label>
                <div className="relative">
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-1 focus:ring-primary focus:border-primary border border-surface-border bg-surface-dark h-14 placeholder:text-text-secondary px-6 text-base font-normal leading-normal transition-all duration-200 shadow-sm" placeholder={field.placeholder} type={field.type} />
                  {field.isAction ? (
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors focus:outline-none">
                      <span className="material-symbols-outlined text-[20px]">{field.icon}</span>
                    </button>
                  ) : (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary">
                      <span className="material-symbols-outlined text-[20px]">{field.icon}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3 px-4 py-1">
              <input className="mt-1 h-5 w-5 rounded border-surface-border bg-surface-dark text-primary focus:ring-primary focus:ring-offset-background-dark cursor-pointer" id="terms" type="checkbox" />
              <label className="text-sm text-text-secondary leading-tight cursor-pointer select-none" htmlFor="terms">
                 I agree to the <a className="text-primary hover:text-primary/80 font-medium underline-offset-2 hover:underline decoration-primary/50" href="#">Terms of Service</a> and <a className="text-primary hover:text-primary/80 font-medium underline-offset-2 hover:underline decoration-primary/50" href="#">Privacy Policy</a>.
              </label>
            </div>

            <button onClick={() => onNavigate(ScreenName.HOME)} className="w-full h-14 rounded-full bg-primary text-background-dark text-[17px] font-bold tracking-tight flex items-center justify-center hover:bg-[#25d36b] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(43,238,121,0.3)] hover:shadow-[0_0_25px_rgba(43,238,121,0.4)] mt-2">
              Get Started
            </button>

            <div className="flex items-center gap-4 my-2 px-4">
              <div className="h-px bg-surface-dark border-b border-surface-border flex-1"></div>
              <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider">Or continue with</p>
              <div className="h-px bg-surface-dark border-b border-surface-border flex-1"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="h-14 rounded-full bg-surface-dark border border-surface-border text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#253229] transition-colors shadow-sm">
                <img alt="Google G logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkQzkX0S-PfbqBzx5ZO52JtzLGtDynenNmPZTRkFGe3CtopEhVJx2B8Tz5hnr-wezvXgoWDInsM0Yqqb3En0u4MRTPBED_80rvVuwTr3KgcTwi431QR8Qd2VpUgU0MUN0Dt2sQjSzuYBT-Kkjau_ZJee88LWvuqBLfxteJud7n8kxLAM42hKsISZG-cAoS0RFaClKm0nEzcZKXej0JbES7xwSSU3doO7veuINs_Eib6jWRFH7KNCnuj_W7lsdooWJOKN2i2HDjhFQ" />
                <span className="hidden sm:inline">Google</span>
              </button>
              <button className="h-14 rounded-full bg-surface-dark border border-surface-border text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#253229] transition-colors shadow-sm">
                <span className="material-symbols-outlined text-2xl">ios</span>
                <span className="hidden sm:inline">Apple</span>
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-text-secondary text-sm">
                Already have an account? <button onClick={() => setView(ScreenName.LOGIN)} className="text-primary font-semibold hover:text-primary/80 transition-colors ml-1">Log In</button>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Login View
  if (view === ScreenName.LOGIN) {
    return (
      <div className="bg-background-dark min-h-screen flex flex-col font-display text-white antialiased overflow-hidden selection:bg-primary selection:text-black">
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="h-12 w-full"></div>
        <div className="flex flex-1 flex-col px-6 pb-6 z-10">
          <div className="flex flex-col items-center pt-8 pb-10">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 text-primary">
              <span className="material-symbols-outlined text-4xl">agriculture</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-center">AgriNoir</h1>
            <p className="text-text-secondary mt-2 text-center text-sm">Masuk untuk mengelola lahan Anda</p>
          </div>

          <form className="flex flex-col gap-5 w-full max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); onNavigate(ScreenName.HOME); }}>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors">mail</span>
              </div>
              <input className="block w-full rounded-full border-0 bg-surface-dark py-4 pl-12 pr-4 text-white placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:bg-[#233b2d] sm:text-sm sm:leading-6 transition-all shadow-sm" placeholder="Email atau Nomor HP" type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors">lock</span>
                </div>
                <input className="block w-full rounded-full border-0 bg-surface-dark py-4 pl-12 pr-12 text-white placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:bg-[#233b2d] sm:text-sm sm:leading-6 transition-all shadow-sm" placeholder="Kata Sandi" type="password" />
                <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary hover:text-white transition-colors" type="button">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
              <div className="flex justify-end">
                <button onClick={() => setView(ScreenName.FORGOT_PASSWORD)} className="text-xs font-medium text-text-secondary hover:text-primary transition-colors">
                  Lupa Kata Sandi?
                </button>
              </div>
            </div>

            <button className="mt-4 flex w-full justify-center items-center rounded-full bg-primary px-3 py-4 text-sm font-bold leading-6 text-background-dark shadow-sm hover:bg-[#22d66b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors" type="submit">
              Masuk
            </button>
          </form>

          <div className="relative mt-8 mb-6">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background-dark px-4 text-xs text-text-secondary uppercase tracking-wider">Atau masuk dengan</span>
            </div>
          </div>

          <button className="flex w-full max-w-md mx-auto items-center justify-center gap-3 rounded-full bg-white/5 px-3 py-3.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-all" type="button">
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M12.0003 20.45C16.6663 20.45 20.5843 17.276 21.9963 13.096H12.0003V9.72803H22.4283C22.5603 10.496 22.6323 11.312 22.6323 12.188C22.6323 18.236 18.5763 22.5 12.0003 22.5C6.20427 22.5 1.50027 17.796 1.50027 12C1.50027 6.20403 6.20427 1.50003 12.0003 1.50003C14.5443 1.50003 16.7163 2.34003 18.4203 3.70803L15.4203 6.63603C14.7723 6.20403 13.6323 5.61603 12.0003 5.61603C8.61627 5.61603 5.79627 8.35203 5.79627 11.964C5.79627 15.576 8.61627 18.312 12.0003 18.312V20.45Z" fill="white"></path>
            </svg>
            <span className="text-sm">Google</span>
          </button>

          <div className="mt-auto pt-10 text-center">
            <p className="text-sm text-text-secondary">
              Belum punya akun?
              <button onClick={() => setView(ScreenName.SIGNUP)} className="font-semibold text-primary hover:text-primary/80 ml-1">Daftar Sekarang</button>
            </p>
          </div>
          <div className="h-4"></div>
        </div>
      </div>
    );
  }

  // Forgot Password View
  if (view === ScreenName.FORGOT_PASSWORD) {
    return (
      <div className="relative flex h-full min-h-screen w-full flex-col bg-background-dark overflow-x-hidden font-display text-white">
        <div className="flex items-center px-4 pt-6 pb-2 justify-between w-full">
          <button onClick={() => setView(ScreenName.LOGIN)} className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white text-2xl">arrow_back</span>
          </button>
        </div>
        <div className="flex-1 flex flex-col px-6 pb-6 max-w-md mx-auto w-full">
          <div className="w-full flex justify-center py-6">
            <div className="relative w-40 h-40 rounded-full bg-surface-dark/50 flex items-center justify-center overflow-hidden border border-white/5 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBITbytiT3_uz3pvTNvPtOl4LEPtzkoGorXPqSSFY4x7sjeZeQ7SI1jRHlWFHLMbhnouJCSomCImAlZZbE6lgDM47d4z1qqzZl4Fb7QN-qcEGmcLwXNv7I7X_z1TMLkNVeAIwD5DztiW1sOF3SC2k8TS6sl2cBor3hyll1CdFLqbz3onNGdyvY-YyVBJ7USB2BbJXkUtMrJBzGKzObBwytcTCm118ZUVnXDUI8HLFZ9vGsYvQFPK1TFFLJJKCsKehRn0q0JwsR0xrQ")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
              <span className="material-symbols-outlined text-primary text-6xl relative z-10 drop-shadow-lg">lock_reset</span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 mb-8">
            <h1 className="text-white text-3xl font-bold tracking-tight">Forgot Password?</h1>
            <p className="text-gray-400 text-base leading-relaxed max-w-[280px]">
              Don't worry, it happens. Please enter the email associated with your account.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white ml-4">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400">mail</span>
                </div>
                <input className="form-input block w-full rounded-full border-0 bg-surface-dark py-4 pl-12 pr-4 text-white ring-1 ring-inset ring-surface-border placeholder:text-text-secondary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-base sm:leading-6 transition-all shadow-sm" placeholder="example@agrinoir.id" type="email" />
              </div>
            </div>
            <button className="w-full rounded-full bg-primary py-4 px-4 text-[#102217] font-bold text-lg shadow-[0_0_20px_-5px_rgba(43,238,121,0.4)] hover:bg-primary/90 hover:shadow-[0_0_25px_-5px_rgba(43,238,121,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all active:scale-[0.98]">
              Send Instructions
            </button>
          </div>
          <div className="flex-grow"></div>
          <div className="flex flex-col items-center gap-4 mt-8 pt-4">
            <p className="text-sm text-gray-400">
              Remember your password?
              <button onClick={() => setView(ScreenName.LOGIN)} className="font-semibold text-primary hover:text-primary/80 transition-colors ml-1">Log in</button>
            </p>
            <button className="text-xs font-medium text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">help</span>
              Contact Support
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
