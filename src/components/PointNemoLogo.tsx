
import { Circle } from "lucide-react";

interface PointNemoLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const PointNemoLogo = ({ size = "md", className = "" }: PointNemoLogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  };
  
  const fontSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };
  
  return (
    <div className={`relative flex items-center ${className}`}>
      <Circle 
        className={`text-nemo-forest ${sizeClasses[size]}`} 
        strokeWidth={2}
        fill="none"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`font-display font-bold ${fontSizeClasses[size]} text-nemo-forest flex tracking-tighter`}>
          <span>P</span>
          <span>N</span>
        </div>
      </div>
    </div>
  );
};

export default PointNemoLogo;
