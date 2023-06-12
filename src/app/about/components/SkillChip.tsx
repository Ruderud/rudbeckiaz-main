interface SkillChipProps {
  name: string;
}

export const SkillChip = ({ name }: SkillChipProps) => {
  return <div className="bg-slate-200 text-black dark:bg-slate-400 font-bold px-2 py-0.5 rounded-full">{name}</div>;
};
