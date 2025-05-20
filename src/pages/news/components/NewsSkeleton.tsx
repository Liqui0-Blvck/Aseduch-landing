const NewsSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Título */}
      <div className="h-12 bg-gray-200 animate-pulse rounded" />

      {/* Subtítulo / meta */}
      <div className="h-4 w-1/3 bg-gray-200 animate-pulse rounded" />

      {/* Imagen */}
      <div className="w-full h-64 bg-gray-200 animate-pulse rounded" />

      {/* Párrafos */}
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-gray-200 animate-pulse rounded ${
              i % 2 === 0 ? "w-full" : "w-5/6"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default NewsSkeleton
