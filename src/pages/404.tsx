const Custom404 = () => {
  return (
    <div className="w-full flex flex-col justify-center max-w-3xl mx-auto mb-16 sm:px-0">
      <div>
        <h1 className="font-bold text-5xl">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-sm">
          Sayfa bulunamadı. Ana sayfaya dönebilirsiniz.
          Böyle bir sayfa bulunamadı anasayfaya dönebilirsiniz.
        </p>
      </div>
    </div>
  )
}

export default Custom404
