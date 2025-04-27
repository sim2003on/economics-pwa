export function YoutubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0"
        title="YouTube video player"
      />
    </div>
  )
}
