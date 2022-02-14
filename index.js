window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("Schätzung");
  
    function success() {
      form.reset();
    }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
}

function displayRanking() {
    document.getElementById('Schätzung').className="off";
    document.getElementById('Teamranking').className="on";
}