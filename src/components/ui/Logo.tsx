
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Logo = ({ className, ...props }: LogoProps) => (
  <svg
    width="120"
    height="36"
    viewBox="0 0 120 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-white", className)}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path fill="#E60000" d="M0 0h120v36H0z" />
      <path
        fill="#FFF"
        d="M31.103 12.314c-.167-.389-.66-.603-1.11-.486-.78.202-1.565.376-2.353.52-.404.072-.662.463-.587.867l.337 1.9c.073.404.462.662.866.588a25.233 25.233 0 0 0 1.824-.4 5.973 5.973 0 0 1-3.722 3.475l-.013.004-1.465.453c-.402.125-.627.558-.502.96l.556 1.783a.748.748 0 0 0 .94.5l1.618-.501A8.67 8.67 0 0 0 32.02 17.3c.485-1.88.417-3.358-.186-4.986Zm-10.708 2.52c.324-.183.486-.573.39-.942l-.484-1.867a.75.75 0 0 0-.923-.53l-

