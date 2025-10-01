import { Github, MessageCircle, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    platform: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Token Economics', href: '#token-economics' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Blog', href: '#blog' },
    ],
    legal: [
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'KYC/AML', href: '#kyc' },
      { label: 'Responsible Gaming', href: '#responsible' },
    ],
    support: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'System Status', href: '#status' },
      { label: 'Report Issue', href: '#report' },
    ],
    community: [
      { label: 'Discord', href: '#', icon: MessageCircle },
      { label: 'Telegram', href: '#', icon: MessageCircle },
      { label: 'Twitter', href: '#', icon: Twitter },
      { label: 'GitHub', href: '#', icon: Github },
    ],
  };

  return (
    <footer className="border-t border-white/10 bg-surface/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-text hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-text hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-text hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-text hover:text-gold transition-colors text-sm flex items-center gap-2"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-text text-center md:text-left">
              <p className="mb-2">
                © 2025 Crypto Bill Payment Platform. All rights reserved.
              </p>
              <p className="text-xs">
                Not available in restricted jurisdictions. Ages 18+ only.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-text hover:text-gold transition-colors">
                English
              </button>
              <div className="w-px h-4 bg-white/10" />
              <button className="text-sm text-gray-text hover:text-gold transition-colors">
                Theme
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
