import React, { useState } from 'react';
import { X, ExternalLink, Zap } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('flashfx_welcome_shown', 'true');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl max-w-2xl w-full overflow-hidden">
        <div className="relative bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-b border-amber-500/30 p-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-300" />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Welcome to FlashFX!</h1>
            </div>
          </div>

          <p className="text-lg text-slate-200 leading-relaxed">
            Create clean motion graphics in minutes. Animate directly on the canvas.
            Stack effects instantly. Focus on ideas. The MVP is fully web.
          </p>
        </div>

        <div className="p-8">
          <div className="space-y-4 mb-8">
            <a
              href="https://substack.com/@flashfx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <span>Newsletter</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://discord.gg/2eYcECrR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-6 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-200 border border-slate-600 hover:border-slate-500 group"
            >
              <span>Discord Server</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.youtube.com/@gabriele-bolgnese"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-6 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-200 border border-slate-600 hover:border-slate-500 group"
            >
              <span>Youtube</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="pt-6 border-t border-slate-700 space-y-3">
            <p className="text-center text-slate-400 text-sm">
              Learn how to use FlashFX on youtube!
            </p>

            <label className="flex items-center justify-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-amber-500 focus:ring-amber-500 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                Don't show again
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
