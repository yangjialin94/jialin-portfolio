const Bullet = ({ description }: { description: string }) => {
  return (
    <div className="flex w-full items-center gap-2">
      <div className={`min-h-2 min-w-2 rounded-full bg-gray-800 dark:bg-gray-200`} />
      <div className="rounded-lg pl-2 leading-normal text-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800">
        {description}
      </div>
    </div>
  );
};

export default Bullet;
