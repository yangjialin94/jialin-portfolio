const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border-2 border-gray-800 px-2 py-1 text-sm hover:border-blue-500 hover:text-blue-500 dark:border-gray-200 dark:hover:border-blue-500 dark:hover:text-blue-500"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;
