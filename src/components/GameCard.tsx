interface GameCardProps {
  bannerUrl: string;
  adsCount: number;
  title: string;
}

export function GameCard({ bannerUrl, adsCount, title }: GameCardProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 right-0 absolute">
        <strong className="text-white font-bold block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
