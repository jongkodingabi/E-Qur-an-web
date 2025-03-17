type VerseProps = {
  verse: String;
  surah: String;
};

function Verse({ verse, surah }: VerseProps) {
  return (
    <div className="bg-[url('/src/assets/Verse.png')] bg-cover bg-no-repeat min-h-[155px] p-4 rounded-2xl text-left flex flex-col justify-between gap-2">
      <div>
        <div className="">
          <p className="font-xs text-light md:text-sm">📖 Your daily verse</p>
          <p className="font-sm text-light font-semibold md:text-xl">{verse}</p>
        </div>
        <p className="font-xs text-light font-light mt-8 md:text-sm">{surah}</p>
      </div>
    </div>
  );
}

export default Verse;
