type FeedbackCardProps = {
  img: string;
  name: string;
  text: string;
}

export function FeedbackCard({ img, name, text }: FeedbackCardProps) {
  return (
    <div className="w-[300px] bg-white shadow-lg px-8 py-10">
      <img src={img} alt="avatar"
        className="rounded-full size-14" />
      <p className="py-4 text-zinc-500">{text}</p>
      <h5 className="font-semibold">{name}</h5>
    </div>
  )
}