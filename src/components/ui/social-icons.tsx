import { 
  FaInstagram,
  FaSpotify, 
  FaSoundcloud,
  FaYoutube,
  FaBandcamp,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaLinkedin
} from "react-icons/fa";
import { 
  SiBeatport,
  SiApplemusic,
  SiTidal
} from "react-icons/si";
import { IconType } from "react-icons";

interface SocialIconProps {
  platform: string;
  url: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const SocialIcon = ({ platform, url, size = 'md', showLabel = false }: SocialIconProps) => {
  const getSocialIcon = (platform: string): IconType => {
    const platformLower = platform.toLowerCase();
    
    switch (platformLower) {
      case 'instagram': return FaInstagram;
      case 'spotify': return FaSpotify;
      case 'soundcloud': return FaSoundcloud;
      case 'youtube': return FaYoutube;
      case 'bandcamp': return FaBandcamp;
      case 'beatport': return SiBeatport;
      case 'apple music': return SiApplemusic;
      case 'tidal': return SiTidal;
      case 'facebook': return FaFacebook;
      case 'twitter': return FaTwitter;
      case 'tiktok': return FaTiktok;
      case 'linkedin': return FaLinkedin;
      default: return FaSpotify; // fallback
    }
  };

  const getSocialColor = (platform: string): string => {
    const platformLower = platform.toLowerCase();
    
    switch (platformLower) {
      case 'instagram': 
        return 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500';
      case 'spotify': 
        return 'bg-green-500 hover:bg-green-600';
      case 'soundcloud': 
        return 'bg-orange-500 hover:bg-orange-600';
      case 'youtube': 
        return 'bg-red-500 hover:bg-red-600';
      case 'bandcamp': 
        return 'bg-cyan-500 hover:bg-cyan-600';
      case 'beatport': 
        return 'bg-green-400 hover:bg-green-500';
      case 'apple music': 
        return 'bg-gray-900 hover:bg-black';
      case 'tidal': 
        return 'bg-blue-600 hover:bg-blue-700';
      case 'facebook': 
        return 'bg-blue-600 hover:bg-blue-700';
      case 'twitter': 
        return 'bg-sky-500 hover:bg-sky-600';
      case 'tiktok': 
        return 'bg-black hover:bg-gray-900';
      case 'linkedin': 
        return 'bg-blue-700 hover:bg-blue-800';
      default: 
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm': return { container: 'w-8 h-8', icon: 'w-4 h-4' };
      case 'md': return { container: 'w-12 h-12', icon: 'w-5 h-5' };
      case 'lg': return { container: 'w-16 h-16', icon: 'w-7 h-7' };
      default: return { container: 'w-12 h-12', icon: 'w-5 h-5' };
    }
  };

  const IconComponent = getSocialIcon(platform);
  const colorClass = getSocialColor(platform);
  const sizeClasses = getSizeClasses(size);

  return (
    <div className={`inline-flex items-center gap-2 ${showLabel ? 'flex-row' : ''}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses.container} ${colorClass} rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg group`}
        title={platform}
        aria-label={`Visitar perfil en ${platform}`}
      >
        <IconComponent className={`${sizeClasses.icon} text-white`} />
      </a>
      {showLabel && (
        <span className="text-sm font-medium text-text-secondary">{platform}</span>
      )}
    </div>
  );
};

interface SocialLinksProps {
  links: Array<{ platform: string; url: string }>;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  className?: string;
}

export const SocialLinks = ({ links, size = 'md', showLabels = false, className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link, index) => (
        <SocialIcon
          key={index}
          platform={link.platform}
          url={link.url}
          size={size}
          showLabel={showLabels}
        />
      ))}
    </div>
  );
};
