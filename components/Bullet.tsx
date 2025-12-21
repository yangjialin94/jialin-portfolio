const Bullet = ({ description }: { description: string }) => {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
      <span className="text-gray-700 dark:text-gray-300">{description}</span>
    </div>
  );
};

export default Bullet;
