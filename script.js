(function () {
  var data = [
      {
        title: "Lorem ipsum dolor.",
        sub_title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae.",
        href: "www.ahmetaksungur.com",
        img:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808/e87f9c94970549.Y3JvcCwxMzgwLDEwODAsNDE2LDA.jpg"
      },
      {
        title: "Lorem ipsum dolor.",
        sub_title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae.",
        href: "www.ahmetaksungur.com",
        img:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808/dc61b288388949.Y3JvcCw0MDQsMzE2LDAsMA.jpg"
      },
      {
        title: "Lorem ipsum dolor.",
        sub_title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae.",
        href: "www.ahmetaksungur.com",
        img:
          "https://mir-s3-cdn-cf.behance.net/projects/max_808/68e6e483880937.Y3JvcCwxOTIwLDE1MDEsMCwyMDk.jpg"
      }
    ],
    template = document.querySelector("#post").innerHTML,
    result = document.querySelector("#post"),
    attachTemplateToData;
  attachTemplateToData = function (template, data) {
    var i = 0,
      len = data.length,
      fragment = "";

    function replace(obj) {
      var t, key, reg;

      for (key in obj) {
        reg = new RegExp("{{" + key + "}}", "ig");
        t = (t || template).replace(reg, obj[key]);
      }

      return t;
    }

    for (; i < len; i++) {
      fragment += replace(data[i]);
    }

    return fragment;
  };

  result.innerHTML = attachTemplateToData(template, data);
})();
