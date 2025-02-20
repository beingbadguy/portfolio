const Skills = ({ skill, yes = true }: { skill: string; yes: boolean }) => {
  return (
    <div
      className={`" w-auto p-1 text-sm select-none border ${
        yes ? "texty tracking-widest" : " border-green-500"
      } rounded `}
    >
      {skill}
    </div>
  );
};

export default Skills;
