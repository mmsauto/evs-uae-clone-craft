export const EVSLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-primary text-primary-foreground font-bold text-2xl px-3 py-1 rounded-md">
        EVS
      </div>
    </div>
  );
};