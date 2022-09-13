export const getCreateContentPayload = (formik: any) => {
  const {
    image,
    title,
    description,
    contentType,
    videoLink,
    videoTitle,
    videoDescription,
    articleLogo,
    articleTitle,
    articleLink,
  } = formik.values
 
  const articles = [
    {
      url: articleLink,
      title: articleTitle,
      iconUrl: articleLogo,
    },
  ]
  
  const videos = [
    {
      Url: videoLink,
      Desc: videoDescription,
      title: videoTitle
    }
  ]


  let createContentPayload

  switch (contentType) {
    case 'Video':
      return (createContentPayload = {
        image,
        title,
        description1: description,
        contentType,
        videos,

      })

    case 'Articles':
      return (createContentPayload = {
        image,
        title,
        description1: description,
        contentType,
        articles,
      })
    case 'VideoAndArticles':
      return (createContentPayload = {
        image,
        title,
        description1: description,
        contentType,
        videos,
        articles,
      })
  }

  return createContentPayload
}
