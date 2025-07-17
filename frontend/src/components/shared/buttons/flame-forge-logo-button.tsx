import { Link } from "react-router-dom";
import FlameForgeLogoSVG from "#/assets/branding/flame-forge-logo.svg?react";

interface FlameForgeLogoButtonProps {
  className?: string;
}

export function FlameForgeLogoButton({ className }: FlameForgeLogoButtonProps) {
  return (
    <Link to="/" className={className}>
      <FlameForgeLogoSVG className="h-8 w-auto" />
    </Link>
  );
}
