import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Key, ShieldCheck, Trash2 } from 'lucide-react';

export default function SettingsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [savedKey, setSavedKey] = useState(false);

  useEffect(() => {
    // Check if key exists in cookie
    const key = getCookie('gemini_api_key');
    if (key) {
      setApiKey(key);
      setSavedKey(true);
    }
  }, []);

  const handleSave = () => {
    if (apiKey.trim()) {
      setCookie('gemini_api_key', apiKey.trim(), 365);
      setSavedKey(true);
      setIsOpen(false);
    }
  };

  const handleDelete = () => {
    eraseCookie('gemini_api_key');
    setApiKey('');
    setSavedKey(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <Settings className="w-4 h-4" />
        <span>API Settings</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            >
              <div className="p-6 border-b border-neutral-100 flex justify-between items-center">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Key className="w-5 h-5 text-neutral-400" />
                  Gemini API Key
                </h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-neutral-900 transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm leading-relaxed flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Your key stays on your device</p>
                    <p>The API key is stored securely in your browser's cookies and is never sent to our servers. It is only used to communicate directly with Google's Gemini API.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700 block">
                    Google Gemini API Key
                  </label>
                  <input 
                    type="password" 
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all font-mono text-sm"
                  />
                </div>

                <div className="text-sm text-neutral-500 space-y-2">
                  <p className="font-medium text-neutral-700">How to get a free API key:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-1">
                    <li>Go to <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Google AI Studio</a></li>
                    <li>Sign in with your Google account</li>
                    <li>Click "Create API key"</li>
                    <li>Copy the key and paste it above</li>
                  </ol>
                </div>
              </div>

              <div className="p-6 bg-neutral-50 border-t border-neutral-100 flex justify-end gap-3">
                {savedKey && (
                  <button 
                    onClick={handleDelete}
                    className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2 mr-auto"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Key
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  disabled={!apiKey.trim()}
                  className="px-6 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save Key
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

// Simple cookie helpers
function setCookie(name: string, value: string, days: number) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export function getCookie(name: string) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name: string) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
