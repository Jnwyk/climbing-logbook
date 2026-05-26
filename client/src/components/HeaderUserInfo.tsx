interface HeaderUserInfoProps {
  user: string;
}

const funnyNicknames = [
  'Trad Dad',
  'Slab Queen',
  'Skibidibi',
  'Polish Alex Hannold',
  'Your Mom',
  'Świr z Bagien',
  'Boulder Bro',
  'Give me a break',
];

export function HeaderUserInfo({ user }: HeaderUserInfoProps) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col py-2">
        <span className="font-medium text-white text-end">{user}</span>
        <span className="font-medium text-[10px] text-primary">
          {funnyNicknames[Math.floor(Math.random() * funnyNicknames.length)]}
        </span>
      </div>
      <span className="py-2 pl-2 self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill="white"
          width={14}
          height={14}
        >
          <path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </span>
    </div>
  );
}
