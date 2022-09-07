function checkURL(url) {
  //   console.log("::: Running checkURL :::", url);
  if (
    url.match(
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    )
  ) {
    // console.log("is a url");
    return true;
  } else {
    // console.log("is not url");
    return false;
  }
}

export { checkURL };
