const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded border border-gray-300 bg-white px-2.5 py-1 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;
