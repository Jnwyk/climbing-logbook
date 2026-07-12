function CommonLabel({ label }: { label: string }) {
  return (
    <label className="text-[10px] font-bold uppercase text-primary/80">
      {label}
    </label>
  );
}

export default CommonLabel;
