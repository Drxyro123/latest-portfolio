export const Button = ({className = "", size ="default", children, ...props}) => {
    const baseClasses =
   "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:brightness-90 hover:scale-105 shadow-[0_10px_30px_rgba(32,178,166,0.3)] transition-all duration-200";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    return(
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};