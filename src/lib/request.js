const noop = () => {};
function request({
  method = "GET",
  url,
  header = "",
  headerValue = "",
  type = "json",
  reqName,
  onSuccess = noop,
  onError = noop,
}) {
  reqName = new XMLHttpRequest();

  reqName.open(method, url);
  reqName.responseType = type;
  if (header !== "") {
    reqName.setRequestHeader(header, headerValue);
  }
  reqName.onload = (event) => {
    const target = event.target;

    if (target.status !== 200) {
      onError(target.statusText);
      return;
    }

    onSuccess(target.response);
  };

  reqName.onerror = () => {
    onerror();
  };

  reqName.send();
}
