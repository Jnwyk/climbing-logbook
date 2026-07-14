function CommonError({ error }: { error: string }) {
  return (
    <span className="col-span-2 block text-center text-error bg-amber-50 font-bold text-[12px] px-3 py-1.5 rounded border border-error/30">
      {error}
    </span>
  );
}

export default CommonError;
